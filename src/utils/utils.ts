import { useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const isDarkMode = useColorScheme() === 'dark';

export const backgroundStyle = {
  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};

export const CampusName = {
  campus: [{
    name: "Politécnico",
  },
  {
    id: 2,
    name: "Reitoria",
  },
  {
    id: 3,
    name: "Agrarias",
  },
  {
    id: 4,
    name: "Botânico",
  },
  ]
};
