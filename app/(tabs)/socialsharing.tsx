import { Alert, Button, Linking, Share, StyleSheet, View } from 'react-native';

const socialsharing = () => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
                title:
                    'React Native Share API| Article from KodaSchool',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed

            }
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };

    // Share on X.com
    const shareOnTwitter = async () => {
        const message = encodeURIComponent('Check out this awesome articles on React Native Expo App to x');
        const url = encodeURIComponent('https://kodaschool.com/category/react-native');
        const twitterUrl = `twitter://post?message=${message}&url=${url}`;
        const webUrl = `https://twitter.com/intent/tweet?text=${message}&url=${url}`;
        try {
            const supported = await Linking.canOpenURL(twitterUrl);
            if (supported) {
                await Linking.openURL(twitterUrl);
            } else {
                await Linking.openURL(webUrl);
            }
        } catch (error) {
            console.error('Error sharing to Twitter:', error);
        }
    }

    // Share on Linked In
    const shareOnLinkedIn = async () => {
        const message = encodeURIComponent('Check out this awesome articles on React Native from an Expo App to Linked In');
        const url = encodeURIComponent('https://kodaschool.com/category/react-native');
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?message=${message}&url=${url}`;
        const webUrl = `https://www.linkedin.com/sharing/share-offsite/?text=${message}&url=${url}`;
        try {
            const supported = await Linking.canOpenURL(linkedInUrl);
            if (supported) {
                await Linking.openURL(linkedInUrl);
            } else {
                await Linking.openURL(webUrl);
            }
        } catch (error) {
            console.error('Error sharing to Twitter:', error);
        }
    }


    return (
        <View>
            <Button onPress={onShare} title="RN Share API" />
            <Button onPress={shareOnTwitter} title="RN Share On X.com" />
            <Button onPress={shareOnLinkedIn} title="RN Share On X.com" />
        </View>
    )
}

export default socialsharing