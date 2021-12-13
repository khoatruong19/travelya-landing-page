import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'


const LogoContainer = styled.div`
    ${tw`
        font-family["ZCOOL KuaiLe"]
        text-2xl
        text-white
        font-bold
    `}`
const Logo = () => {
    return (
        <LogoContainer>
            TRAVELYA
        </LogoContainer>
    )
}

export default Logo
