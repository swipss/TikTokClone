import { StyleSheet, Dimensions,Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Platform.OS == 'android' ? Dimensions.get('window').height + 14 : Dimensions.get('window').height - 78  ,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    
    bottomContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'

    },
    uiContainer: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    handle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10,
    },
    description: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '300',
        marginBottom: 10,
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    songName: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 5,
    },
    songImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 8,
        borderColor: '#4c4c4c'
    },
    // Right container
    rightContainer: {
        alignSelf: 'flex-end',
        height: 300,
        justifyContent: 'space-between',
        marginRight: 5,
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff'
    },
    statsLabel: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        marginTop: 2,
    },
    iconContainer: {
        alignItems: 'center'
    },
    topContainer: {
        position: 'absolute',
        top: 45,
        alignSelf: 'center',
        flexDirection: 'row',
        zIndex: 100
        
    },

})

export default styles;