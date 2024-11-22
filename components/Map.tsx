import { Alert, StyleSheet, View } from "react-native";
import React, { Component, useEffect, useState } from "react";
import Mapbox, {
  Camera,
  Images,
  LocationPuck,
  MapView,
  ShapeSource,
  SymbolLayer,
  Image,
  ImageSource,
} from "@rnmapbox/maps";
import * as Location from "expo-location";
import { featureCollection, point } from "@turf/helpers";
import { pin, userpin } from "@/assets/images/index";
import rescues from "@/data/rescues.json";
import { ExampleWithMetadata } from "@/common/ExampleMetadata";

const AccessToken = process.env.EXPO_PUBLIC_MAP_KEY || "";
console.log(AccessToken);

Mapbox.setAccessToken(
  "pk.eyJ1Ijoic29sdyIsImEiOiJjbTJ2bXY4MnIwZjAxMmtzYTRxYWZsaDRmIn0.-cql6cuzt1ypXPH8wrakDQ"
);

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface MapProps {
  haveData: boolean;
}

const Map = ({ haveData }: MapProps) => {
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);
  const points = rescues.map((rescue) => point([rescue.lat, rescue.long]));

  useEffect(() => {
    const requestLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission denied",
          "Location permission is required to use this feature."
        );
        return;
      }

      try {
        const location = await Location.getCurrentPositionAsync({});
        setUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } catch (error) {
        Alert.alert("Error", "Unable to fetch location.");
      }
    };

    requestLocationPermission();
  }, []);

  if (!userLocation) {
    return <View style={styles.loader}></View>; // Hiển thị loader nếu vị trí chưa sẵn sàng
  }

  return (
    <MapView
      style={{ flex: 1 }}
      styleURL="mapbox://styles/mapbox/navigation-day-v1"
    >
      <Camera
        followZoomLevel={14}
        followUserLocation
        centerCoordinate={[userLocation.longitude, userLocation.latitude]}
      />

      <LocationPuck
        puckBearingEnabled
        puckBearing="heading"
        pulsing={{ isEnabled: true }}
      />

      {haveData ? (
        <ShapeSource id="rescues" shape={featureCollection(points)}>
          <SymbolLayer
            id="rescues-icons"
            style={{
              iconImage: "pin",
              iconSize: 0.8,
              iconAllowOverlap: true,
              iconAnchor: "bottom",
            }}
          />
          <Images images={{ pin: pin }} />
        </ShapeSource>
      ) : (
        <></>
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const metadata: ExampleWithMetadata["metadata"] = {
  tags: ["LocationPuck", "LocationPuck#topImage", "LocationPuck#scale"],
};
Map.metadata = metadata;
