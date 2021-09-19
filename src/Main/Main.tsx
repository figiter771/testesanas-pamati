import camel from '../pictures/camel.jpg';
import banner from '../pictures/1.jpg'
import img1 from '../pictures/2.jpg'
import img2 from '../pictures/3.jpg'
import img3 from '../pictures/4.jpg'
import img4 from '../pictures/5.jpg'

import { AlignedBlock, BannerImage, BlueButton, ButtonBlock, CenteredBlock, CenteredImage, CorrectText, FullImage, LeftImage, MisalignedBlock, RightImage, SpacingBlock, StylizedText } from './MainStyles';
export default function Main() {

    return (
        <div>
            <CorrectText>Programmatūras teštēšanas pamati</CorrectText>
            <BannerImage src={banner} alt="camel" />

            <MisalignedBlock>

                <LeftImage src={img1} alt="..." />
                <SpacingBlock />
                <RightImage src={img4} alt="..." />

            </MisalignedBlock>
            <ButtonBlock>
                <BlueButton>Uz kursa materiāliem</BlueButton>
            </ButtonBlock>
            <AlignedBlock>
                <CenteredImage alt="Kvalitātes piramīda" />
                <CenteredBlock>
                    <FullImage src={img3} alt="..." />
                    <StylizedText>
                        Piemērs
                    </StylizedText>
                </CenteredBlock>

            </AlignedBlock>

        </div>
    )
}
