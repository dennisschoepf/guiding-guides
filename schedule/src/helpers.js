export function createDisplayableSchedule (schedule, stops) {
  return Object.keys(schedule).map((markerKey, i) => {
    const markerStop = schedule[markerKey].selectedStop;
    const stopData = stops[`stop-${markerStop}`];

    return {
      ...stopData,
      startTime: (i * 2) + 9,
      endTime: (i * 2) + 2 + 9,
    }
  });
}