interface TourData {
  source: string;
  destination: string;
}

export const getSourcesAndDestinations = (tourData: TourData[]) => {
  const allSources = tourData.map((tour) => tour.source);
  const allDestinations = tourData.map((tour) => tour.destination);

  return { allSources, allDestinations };
};
