import styled from "styled-components";
import Path from "./Components/Path";
import DemoImg from './Assets/image17.png';
import directionArrow from './Assets/direction.svg';
import SubMenu from './Components/SubMenu';
import DineoutPay from "./Components/DineoutPay";
import FoodMenu from "./Components/FoodMenu";
import AboutUs from "./Components/AboutUs";
import l1 from "./Assets/Explore more restaurants.svg";
import l2 from "./Assets/missingInfo.svg";
import l3 from "./Assets/ratings.svg";
import l4 from "./Assets/Dineout pay text.svg";
import fassaiImg from "./Assets/fassai.svg";
import fassaiNoImg from "./Assets/fassaiNo.svg";
import doOfferImg from "./Assets/Dineout Pay Offers.svg";
import calIcon from "./Assets/calIcon.svg";
import noOfrImg from "./Assets/No offer.svg";
import downArrow from "./Assets/downArrowHead.svg";

const Wrapper = styled.div`
    width: 100vw;
    padding: 26px 10.56% 48px;
    background-color: #E5E5E5;
    color: #797979;
    display: flex;
    flex-direction: column;
`;

const Main = styled.div`
    /* width: 79vw; */
    display: flex;
    justify-content: space-between;
    gap: 1.143vw;
    margin: 30px 0px 24px;
`;

const Left = styled.div`
    width: 52.2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;

    > div {
        background-color: #FFFFFF;
        border-radius: 4px;
    }
`;
const Right = styled.div`
    width: 25.56vw;
    background-color: #FFFFFF;
    height: max-content !important;


    > div {
        &:nth-child(1){
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #333333;
            color: #FFFFFF;
            height: 74px;

            > p{
                font-size: 18px;
                line-height: 28px;
                font-weight: 700;
            }
        }
    }

    .reservation__offerAndTime{
        background-color: #F8F8F8;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        > div > img {
            margin: 16px 16px 11px;
        }

        > div {
            &:nth-child(2){
                margin: 0 23px 16px;
                display: flex;
                align-items: center;

                > span {
                    margin: 0 5px;
                    padding-bottom: 2px;
                }
                > p, > span {
                    color: #333333;
                    font-size: 14px;
                    line-height: 20px;
                    font-weight: 700;
                }
            }
        }
    }

    .calendar__head--parent {
        display: flex;
        flex-direction: column;
        padding: 8px 24px 8px 16px;

        > p {
            color: #333333;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
        }

        .calendar__head{
            margin: 8px 0;
            height: 96px;
            display: flex;
            flex-direction: row;
            border-radius: 4px;
            box-shadow: 2px -1px 16px #00000028;

            > div{
                &:nth-child(1){
                    background-color: #3595FF;
                    display: flex;
                    flex-direction: column;
                    width: 60px;
                    padding: 17px 0 15px;
                    align-items: center;
                    gap: 9px;
                    border-radius: 4px 0 0 4px;

                    > p {
                        background-color: #0B5B8F;
                        color: #FFFFFF;
                        font-size: 12px;
                        line-height: 16px;
                        font-weight: 400;
                        width: max-content;
                        padding: 2px 8px;
                    }

                }
            }


            .calendar__dayes--parent{
                display: flex;
                flex-direction: row;
            }
        }
    }
`;

const Details = styled.div`


    .restaurant__mainImg--parent{
        width: 100%;

        > img {
            width: 100%;
            border-radius: 4px 4px 0 0;
        }
    }

    .restaurant__details{
        display: flex;
        justify-content: space-between;
        padding: 16px;
        position: relative;
    }

    
    .restaurant__details--left{
        > h2 {
            color: #333333;
            font-weight: 700;
            line-height: 30px;
            font-size: 24px;
        }
    }
    
    .restaurant__details--sections{
        display: flex;
        flex-direction: row;
        margin-top: 16px;
        align-items: center;

        > p, > span {
            font-size: 14px;
            weight: 400;
            line-height: 20px;
        }

        > span {
            margin: 0 5px;
        }

        .restaurant__timing{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 7px;

            > span {
                &:nth-child(1) {
                    color: #3595FF;
                }
            }
            > img {
                height: 9.3px;
                weight: 5.49px;
            }
        }
    }

    .direction{
        display: flex;
        flex-direction: row;
        color: #3595FF;
        line-height: 20px;
        font-size: 14px;
        font-weight: 700;
        margin-left: 7px;
    }
    
    .restaurant__details--right{
        > .restaurant__details--sections{
            background-color: #51BA64;
            height: 46px;
            width: 64px;
            color: #FFFFFF;
            font-weight: 700;
            font-size: 22px;
            line-height: 26px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0px;
            right: 16px;
        }

        > div {
            &:nth-child(2){
                position: absolute;
                top: 94px;
                right: 16px;
                color: #3595FF;
                text-decoration: underline dotted #3595FF;
                text-underline-position: under;
                text-decoration-thickness: 2px;
                font-size: 14px;
                font-weight: 700;
                line-height: 20px;
            }
        }
    }
`;

const Fssai = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    > img {
        &:nth-child(1){
            height: 36px;
            weight: 74px;
        }
    }
`;

const RestaurantPage = () => {

    return(<>
        <Wrapper>
            <Path />
            <Main>
            <Left>
                <Details>
                    <div className="restaurant__mainImg--parent">
                        <img src={DemoImg} alt="restaurant" />
                    </div>
                    <div className="restaurant__details">
                        <div className="restaurant__details--left">
                            <h2>The Green House</h2>
                            <div className="restaurant__details--sections">
                                <p>&#8377; 1,000 for 2</p>
                                <span>&#124;</span>
                                <p>Italian, Continental</p>
                            </div>
                            <div className="restaurant__details--sections">
                                <p>Salt Lake</p>
                                <span>&#124;</span>
                                <p>Kolkata</p>
                                <span>&#124;</span>
                                <div className="direction">
                                    <img src={directionArrow} alt="directionArrow" />
                                    <p>Get Direction</p>
                                </div>
                            </div>
                            <div className="restaurant__details--sections">
                                <p className="restaurant__timing">
                                    Time: 11:00 AM to 10:30 PM 
                                    <span>(Open Now)</span> 
                                    {/* <span>&#8964;</span> */}
                                    <img src={downArrow} alt="downArrow" />
                                </p>
                            </div>
                        </div>
                        <div className="restaurant__details--right">
                            <div className="restaurant__details--sections">
                                <p>4</p>
                                <span>&#9733;</span>
                            </div>
                            <div>
                                <p>21 reviews</p>
                            </div>
                        </div>
                    </div>
                </Details>
                <SubMenu />
                <DineoutPay />
                <FoodMenu />
                <AboutUs />
                <img src={l1} alt="l1" />
                <img src={l2} alt="l2" />
                <img src={l3} alt="l3" />
                <img src={l4} alt="l4" />
            </Left>
            <Right>
                <div>
                    <p>Make a Reservation</p>
                </div>
                <div className="reservation__offerAndTime">
                    <div>
                        <img src={doOfferImg} alt="doOfferImg" />
                    </div>
                    <div>
                        <b>2021-12-16</b>
                        <span>&#124;</span>
                        <b>2:00 PM</b>
                    </div>
                </div>
                <div className="calendar__head--parent">
                    <p>Select Date</p>
                    <div className="calendar__head">
                        <div>
                            <p>DEC</p>
                            <img src={calIcon} alt="calIcon" />
                        </div>
                        <div>
                            <div className="calendar__dayes--parent">
                                <div className="calender__dayes">
                                    <p>Today</p>
                                    <p>16</p>
                                </div>
                                <div className="calender__dayes">
                                    <p>Wed</p>
                                    <p>17</p>
                                </div>
                                <div className="calender__dayes">
                                    <p>Thu</p>
                                    <p>18</p>
                                </div>
                                <div className="calender__dayes">
                                    <p>Fri</p>
                                    <p>19</p>
                                </div>
                                <div className="calender__dayes">
                                    <p>Sat</p>
                                    <p>20</p>
                                </div>
                                <div className="calender__dayes">
                                    <p>Sun</p>
                                    <p>21</p>
                                </div>
                                <div className="calender__dayes">
                                    <p>Mon</p>
                                    <p>22</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p><b>Time</b></p>
                        <div>
                            <p>Choose an available time slot</p>
                            <p>2:00 PM</p>
                            <span>&#8964;</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={noOfrImg} alt="noofferimg" />
                    </div>
                    <div>
                        <p>
                            Sorry there are no Offers available for these timings. Select guests to continue to reserve a table.
                        </p>
                    </div>
                </div>
            </Right>
            </Main>
            <Fssai>
                <img src={fassaiImg} alt="fassai" />
                <img src={fassaiNoImg} alt="fassaino" />
            </Fssai>
        </Wrapper>
    </>)

}

export default RestaurantPage;