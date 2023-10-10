interface TourData {
  carName: string;
}

export const getSourcesAndDestinations = (tourData: TourData[]) => {
  // const allSources = tourData.map((tour) => tour.source);
  // const allDestinations = tourData.map((tour) => tour.destination);
  const allSources = ['Chandighar', 'Shimla', 'Kullu Manali', 'Solan', 'Rampur', 'Rohru'];
  const allDestinations = allSources;

  return { allSources, allDestinations };
};
