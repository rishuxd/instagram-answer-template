import styled from "styled-components";
import { toPng } from "html-to-image";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(./bg.jpg);
`;

const TemplateWrapper = styled.div`
  width: 360px;
  height: 200px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 15px;
`;

const Title = styled.div`
  padding: 0 30px;
  background-color: black;
  color: white;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  outline: none;
`;

const Desc = styled.div`
  padding: 0 30px;
  background-color: white;
  font-size: 20px;
  flex-grow: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  outline: none;
`;

const Button = styled.button`
  padding: 12px 18px;
  margin-top: 25px;
  border: none;
  font-size: 16px;
  background-color: #00c8ff;
  border-radius: 5px;
  transition: all ease 0.1s;

  &:active {
    transform: scale(0.92);
`;

const Copyright = styled.p`
  color: white;
  font-size: 14px;
`;

const App = () => {
  const handleDownloadImage = () => {
    const templateElement = document.getElementById("template");

    toPng(templateElement)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "custom_template.png";
        link.click();
      })
      .catch((error) => {
        console.error("Error converting template to image", error);
      });
  };

  return (
    <Container>
      <TemplateWrapper id="template">
        <Title contentEditable suppressContentEditableWarning>
          Click here to edit.
        </Title>
        <Desc contentEditable suppressContentEditableWarning>
          Click here to edit.
        </Desc>
      </TemplateWrapper>

      <Button onClick={handleDownloadImage}>Download</Button>

      <Copyright>
        <p>srivastavjyotiswaroop@gmail.com</p>
      </Copyright>
    </Container>
  );
};

export default App;
