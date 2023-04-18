import styled from "styled-components/native";
import { COLORS } from "../../constants/Color";
// import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const Container = styled.View`
    background: ${COLORS.BLUE_DARK};
    flex: 1;
`;

export const Content = styled.View`
    padding: 15px;
`;

export const ContainerInfoWelcome = styled.View`
    
`;

export const ContentWelcome = styled.View`
    flex-direction: row;
`;

export const LogoCemig = styled.Image`
    width: 64px;
    height: 32px;   
`;

export const Logo = styled.Image`
    width: 32px;
    height: 32px;
`;

export const ContentSelect = styled.View`
    width: 100%;
    border-radius: 10px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const TextWelCome = styled.Text`
    font-size: 18px;
    color: ${COLORS.WHITE};
    weight: 600;
    margin-right: 10px;
`;

export const ButtonLogout = styled.TouchableOpacity``;

export const TextLogout = styled.Text`
    font-size: 16px;
    color: ${COLORS.WHITE};
    fontWeight: 700;
    borderBottomWidth: 2px;
    border-color: ${COLORS.WHITE};
    border-radius: 2px;
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

export const FlexLogout = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    margin-left: 10px;
`;

export const ContentSelections = styled.View`
    margin-bottom: 10px;
    margin-top: 60px;
    margin-right: 10px;
`;

export const TextTitle = styled.Text`
    font-size: 22px;
    fontWeight: 700;
`;

export const TextWarp = styled.Text`
    font-size: 10px;
    color: ${COLORS.BLACK};
`;

export const TextSubTitle = styled.Text`
    font-size: 16px;
    fontWeight: 700;
    color: ${COLORS.WHITE};
    margin-left: 10px;
`;

export const TextValue = styled.Text`
    font-size: 14px;
    fontWeight: 700;
`;

export const Selection = styled.TouchableOpacity`
    border-color: ${COLORS.WHITE};
    border-radius: 5px;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 5px;
`;

// export const Icon = styled(FontAwesome5)`
//     font-size: 20px;
// `;
