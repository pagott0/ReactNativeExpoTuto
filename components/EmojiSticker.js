import { View, Image } from 'react-native'

export default function EmojiSticker({ imageSize, stickerSouce }){
    return(
        <View style={{top: -350}}>
            <Image 
                source={stickerSouce}
                resizeMode="contain"
                style={{width: imageSize, height: imageSize}}
            />
        </View>
    )
}