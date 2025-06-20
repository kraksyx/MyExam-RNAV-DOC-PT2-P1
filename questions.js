
const questions = [
  {
    question: "On what principle does primary ATC radar work?",
    options: [
      "pulse technique",
      "pulse comparison",
      "continuous wave",
      "transponder interrogation"
    ],
    correct: 0
  },
  {
    question: "An SRA may be flown to:",
    options: [
      "0.5 nm using QNH unless the pilot advises the controller the approach is to be flown on QFE",
      "2.0 nm using QFE unless the pilot advises the controller the approach is to be flown on QNH",
      "0.5 nm using QNH only",
      "2.0 nm using QFE only"
    ],
    correct: 1
  },
  {
    question: "A high resolution surveillance radar will be terminated at a range from touchdown of:",
    options: [
      "0.25 nm",
      "0.5 nm",
      "1 nm",
      "2 nm"
    ],
    correct: 1
  },
  {
    question: "In a primary radar system:",
    options: [
      "the radar is primarily used for range-finding",
      "all radio frequency energy is produced by the radar located at the radar site",
      "the aircraft plays the secondary role, just listening to the radar signals from the ground radar",
      "the radar is the primary aid for ATC"
    ],
    correct: 1
  },
  {
    question: "An aerodrome ground movement radar is likely to operate in the SHF band with a scan rate of ____ revolutions per minute.",
    options: [
      "30",
      "45",
      "60",
      "75"
    ],
    correct: 2
  },
  {
    question: "Why does surface movement radar use a frequency in the SHF band and not EHF?",
    options: [
      "SHF gives better definition of aircraft type than EHF",
      "EHF is absorbed and scattered by moisture in the air. Switching to SHF reduced the problem",
      "The power requirements of EHF were unsustainable in the UK",
      "EHF is potentially hazardous to personnel on the area. This was completely overcome by switching to SHF"
    ],
    correct: 1
  },
  {
    question: "The maximum range obtainable from an ATC Long Range Surveillance Radar is approximately:",
    options: [
      "100 NM",
      "200 NM",
      "300 NM",
      "400 NM"
    ],
    correct: 2
  },
  {
    question: "What is the range of long range ground radar?",
    options: [
      "100 nm",
      "200 nm",
      "300 nm",
      "400 nm"
    ],
    correct: 2
  },
  {
    question: "What is a typical range for an EN-route surveillance radar (RSR)?",
    options: [
      "Up to 100 nm",
      "Up to 150 nm",
      "Up to 200 nm",
      "Up to 250 nm"
    ],
    correct: 3
  },
  {
    question: "An ATC radar unit, which is used in the approach, has a high aerial rotation rate. This is so that:",
    options: [
      "Target information is rapidly refreshed",
      "Compensation can be made for the long PRI",
      "Compensation is made for the narrow beam width",
      "The rigidity of the aerial can be improved by inertia"
    ],
    correct: 0
  },
  {
    question: "A surveillance radar element (SRE) used to provide approach guidance:",
    options: [
      "Does not have a height determination capacity",
      "Can be used to give guidance both horizontally and vertically",
      "Can only be used to a point 3 miles from threshold",
      "May not be used in heavy rain because of the high levels of signal loss"
    ],
    correct: 0
  },
  {
    question: "In a primary pulsed radar the ability to discriminate in azimuth is a factor of:",
    options: [
      "Pulse length",
      "Beam width",
      "Frequency",
      "PRI"
    ],
    correct: 1
  },
  {
    question: "In ATC surveillance radar procedures, if primary radar fails but coverage continues to be provided by SSR:",
    options: [
      "Full radar control with standard radar separation will be maintained",
      "Non-radar separation standards will be introduced as soon as possible",
      "All radar assistance will be terminated immediately",
      "Radar assistance will be terminated after standard separation has been introduced"
    ],
    correct: 1
  },
  {
    question: "Precision Approach Radars are required under the ICAO specifications to indicate an aircraft within the following parameters:",
    options: [
      "Azimuth: 10°, Vertical: 40°, Range: 7 nm",
      "Azimuth: 20°, Vertical: 7°, Range: 9 nm",
      "Azimuth: 30°, Vertical: 10°, Range: 10 nm",
      "Azimuth: 40°, Vertical: 15°, Range"
    ],
    correct: 1
  },
  {
    question: "A monochrome radar operating in the contour mode ____ and indicates them as hollow centres:",
    options: [
      "adjusts the gain to exclude returns above the iso-echo level",
      "is incapable of painting returns above the iso-echo level because of the limitations of the system",
      "cancels returns above the iso-echo level",
      "adjusts the gain to exclude returns below the iso-echo level"
    ],
    correct: 2
  },
  {
    question: "If the AWR transmitter is required to be switched on before take-off the scanner should be tilted up with:",
    options: [
      "either of these modes selected",
      "the mapping mode selected",
      "the weather mode selected",
      "none of these"
    ],
    correct: 2
  },
  {
    question: "In which frequency band do most airborne weather, and ground based ATC, radar systems operate?",
    options: [
      "VHF",
      "UHF",
      "EHF",
      "SHF"
    ],
    correct: 3
  },
  {
    question: "On switching on the AWR a single line appears on the display. This means that:",
    options: [
      "the transmitter is unserviceable",
      "the receiver is unserviceable",
      "the CRT is not scanning",
      "the antenna is not scanning"
    ],
    correct: 3
  },
  {
    question: "In the MAPPING MODE the airborne weather radar utilises a:",
    options: [
      "fan shaped beam effective up to a maximum of 50 NM to 60 NM range",
      "fan shaped beam effective up to a range of 150 NM",
      "pencil beam to a maximum range of 60 NM",
      "pencil beam effective from zero to 150 NM"
    ],
    correct: 0
  },
  {
    question: "The Cosecant squared beam is used for mapping in the AWR because:",
    options: [
      "a greater range can be achieved",
      "a wider beam is produced in azimuth to give a greater coverage",
      "a larger area of ground is illuminated by the beam",
      "it allows cloud detection to be effected whilst mapping"
    ],
    correct: 2
  },
  {
    question: "The main factors which affect whether an AWR will detect a cloud are:",
    options: [
      "the size of the water droplets and the diameter of the antenna reflector",
      "the scanner rotation rate and the frequency/wavelength",
      "the size of the water droplets and the wavelength/frequency",
      "the size of the water droplets and the range of the cloud"
    ],
    correct: 2
  },
  {
    question: "Which of the following cloud types is most readily detected by airborne weather radar when using the weather beam?",
    options: [
      "Stratus",
      "Cirrocumulus",
      "Cumulus",
      "Altostratus"
    ],
    correct: 2
  },
  {
    question: "When using the AWR to detect long range ground features the most suitable mode of operation or beam selected would be:",
    options: [
      "the manual mode",
      "the fan shaped beam",
      "the mapping mode",
      "the contour mode"
    ],
    correct: 0
  },
  {
    question: "When switching on the weather radar, after start-up a single very bright line appears on the screen. This means that the:",
    options: [
      "scanner is not rotating",
      "transmitter is faulty",
      "scanning of the cathode ray tube is faulty",
      "receiver is faulty"
    ],
    correct: 2
  },
  {
    question: "Which of the following lists phenomena that CANNOT be detected by weather radar?",
    options: [
      "Dry hail; clear air turbulence",
      "Snow; clear air turbulence",
      "Clear air turbulence; turbulence in cloud with precipitation",
      "Snow; turbulence in clouds with precipitation"
    ],
    correct: 1
  },
  {
    question: "The airborne weather radar (AWR) cannot detect:",
    options: [
      "snow",
      "moderate rain",
      "dry hail",
      "wet hail"
    ],
    correct: 0
  },
  {
    question: "The advantage of the use of slotted antennas in modern radar technology is to:",
    options: [
      "simultaneously transmit weather and mapping beams",
      "virtually eliminate lateral lobes and as a consequence concentrate more energy in the main beam",
      "have a wide beam and as a consequence better target detection",
      "eliminate the need for azimuth slaving"
    ],
    correct: 1
  },
  {
    question: "The tilt angle on the AWR at which an active cloud just disappears from the screen is 4 degrees up. If the beam width is 5 degrees and the range of the cloud is 40 NM use the 1 in 60 rule to calculate the approximate height of the cloud relative to the aircraft.",
    options: [
      "4000 above",
      "6000 above",
      "4000 below",
      "6000 below"
    ],
    correct: 1
  },
  {
    question: "AWR in the ____ mode progressively ____ as distances ____ to equalise screen brightness",
    options: [
      "weather, decreases gain, increase",
      "mapping, decreases power, decrease",
      "weather, increases power, decrease",
      "mapping, increases gain, decrease"
    ],
    correct: 1
  }
];
