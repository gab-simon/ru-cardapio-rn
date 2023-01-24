import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
// import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { COLORS } from "../../constants/Color";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { isDarkMode } from "../../utils/utils";
  

export const Container = styled.View`
    background: ${true ? 'black' : 'white'};
`;

export const Content = styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    // margin-top: ${getStatusBarHeight(true)}px;
`;

export const ContainerInfoWelcome = styled.View`
    
`;

export const ContentWelcome = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const HeightFill = styled.View`
    height: ${getStatusBarHeight(true)}px;
`;

export const LogoCemig = styled.Image`
    width: 64px;
    height: 32px;   
`;

export const Logo = styled.Image`
    width: 32px;
    height: 32px;
    border-radius: 50px;
`;

// export const Icon = styled(FontAwesome5)`
//     color: ${COLORS.WHITE};
//     font-size: 24px;
// `;

export const ContainerImageUser = styled.View`
    width: 29px;
    height: 29px;
    background: ${COLORS.GRAY};
    border-radius: 50px;
    margin-right: 10px;
`;

export const TextWelCome = styled.Text`
    font-size: 16px;
    color: ${COLORS.BLUE};
    margin-right: 10px;
`;

export const Button = styled.TouchableOpacity``;

export const TextLogout = styled.Text`
    font-size: 15px;
    color: ${COLORS.WHITE};
    letter-spacing: 0.4px;
    background-color: ${COLORS.BLUE};
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
`;

export const ContainerTable = styled.View`
    height: 90px;
    width: 60px;
    align-items: center;
    margin: 0 5px;
`;

export const ViewWidth = styled.View`
   width: 0px;
   height: 65px;
   border: 0.5px solid #BBBBBB;
`;

export const FlexDirectionTable = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    margin-left: 10px;
`;

export const ContainerFlatList = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
`;

export const TextTitle = styled.Text`
    font-size: 20px;
    fontWeight: 600;
    color: ${COLORS.WHITE};
`;

export const TextWarp = styled.Text`
    font-size: 10px;
    color: ${COLORS.BLACK};
`;

export const TextSubTitleTable = styled.Text`
    font-size: 12px;
    color: ${COLORS.BLACK};
    margin-bottom: 5px;
`;

export const TextValueTable = styled.Text`
    font-size: 14px;
    color: ${COLORS.BLACK};
`;
