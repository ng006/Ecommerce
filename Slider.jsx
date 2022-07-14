import Image1 from './../Image1.jpg';
import Image2 from './../Image2.jpg';


/* const Container = styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
 align-items: center;
 background-color: coral;
 position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: white;
  border-radius: 80%;
  box-shadow: 1px 2px 10px #888888;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  cursor: pointer;
  opacity: 0.8;
  margin: auto;
  left: ${props => props.direction === "left" && "30px"};
  right: ${props => props.direction === "left" && "30px"}
  z-index: 2;
`;

const Wrapper = styled.div`
height: 100vh;
width: 100vw;
display: flex;
`;

const Slide = styled.div`
height: 100vh;
width: 100vw:
display: flex;
align-items: center;
justify-content: align-items;
`;

const AddImage = styled.div`
height: 100%; 
flex: 1;
`;

const Image = styled.img`
 height: 80%;
`;

const ImageInfo = styled.div`
 flex: 1; 
 padding: 50px;
`;

const Title = styled.h1`
font-size: 70px;
`;

const Desc = styled.p`
margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`; */

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src= {Image1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={Image2} className="d-block w-100" alt="..."/>
    </div>
    {/* <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div> */}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon primary" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            {/* <Wrapper>
                <Arrow direction="left">
                    <ArrowRightOutlined />
                </Arrow>
                <Arrow direction="right">
                    <ArrowLeftOutlined />
                </Arrow>
                <Slide>
                    <AddImage>
                        <Image src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11056154/2019/12/5/30b0017d-7e72-4d40-9633-ef78d01719741575541717470-AHIKA-Women-Black--Green-Printed-Straight-Kurta-990157554171-1.jpg" />
                    </AddImage>
                    <ImageInfo>
                        <Title>Summer Sale</Title>
                        <Desc>
                            Don't compromise on style
                        </Desc>
                        <Button>
                            SHOP NOW
                        </Button>
                    </ImageInfo>
                </Slide>
            </Wrapper> */}
        </div>
    )
}

export default Slider
