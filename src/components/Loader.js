import styled, { keyframes } from "styled-components"

const Loader = ({ text }) => {
    return (
        <Overlay>
            <Content>
                <h1>{text}..</h1>
            </Content>
        </Overlay>
    )
}

export default Loader

const AnimationColor = keyframes`
    from {
        color: #333333;
    }

    to {
        color: #b5e0ff;
    }
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    width: 40%;

    h1{
        background-color: transparent;
        animation: ${ AnimationColor } .5s alternate infinite;
    }
`

const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: rgb(255, 255, 255, 0.7);
`