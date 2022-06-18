import { SafeAreaView, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import styles from '../../Styles/SoruDetay.style'
import SoruDetayKutu from '../../Components/HelperComponents/SoruDetayKutu';
import CevapGonder from '../../Components/HelperComponents/CevapGonder';
import Font from '../../Components/Font';
import Cevaplar from '../../Components/HelperComponents/Cevaplar';


const SoruDetay = (props) => {
    const { soruId,
        soruBaslik,
        soruAciklama,
        soruResim,
        soruDers,
        soruKonu,
        soruTarih,
        soranId,
        soranAd } = props.route.params;

    return (
        <ImageBackground source={require('../../Resimler/drawerr.png')}
            style={[styles.soru, { width: undefined, height: undefined }]}
        >
            <SafeAreaView style={styles.container}>
                <Font />
                <ScrollView>
                    <SoruDetayKutu
                        soruBaslik={soruBaslik}
                        soruAciklama={soruAciklama}
                        soruResim={soruResim}
                        soruDers={soruDers}
                        soruKonu={soruKonu}
                        soruTarih={soruTarih}
                        soranId={soranId}
                        soranAd={soranAd}
                        onPress={() => props.navigation.navigate('Resim Detayı',
                            {
                                resim: soruResim,
                            })}
                    />
                    <CevapGonder soruId={soruId} />
                    <Cevaplar soruId={soruId} navigation={props.navigation} />
                </ScrollView>

            </SafeAreaView>
        </ImageBackground>
    )
}

export default SoruDetay