export type ExampleMetadata = {
  tags: string[];
};

export type ExampleWithMetadata = React.ComponentType & {
  metadata: ExampleMetadata;
};
