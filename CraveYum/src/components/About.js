import { useState } from "react";
import UpArrow from "../assets/icons/svgs/UpArrow.svg";
import DownArrow from "../assets/icons/svgs/DownArrow.svg";
const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <div className="aboutCategoriesContainer">
      <div className="aboutCatHeader" onClick={() => setIsVisible()}>
        <h3 className="aboutCategoryTitle">{title}</h3>
        {isVisible ? <img src={UpArrow} /> : <img src={DownArrow} />}
      </div>
      {isVisible ? (
        <pre
          style={{
            whiteSpace: "pre-wrap",
            fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
            marginBottom: ".6rem"
          }}
        >
          {desc}
        </pre>
      ) : (
        ""
      )}
    </div>
  );
};

const About = () => {
  const [showSection, setShowSection] = useState("about");
  return (
    <div className="aboutContainer">
      <h1>FAQs</h1>

      <Section
        title={"What is CraveYum Customer Care Number?"}
        desc={`We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@CraveYum.in 

          Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A CraveYum representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.`}
        isVisible={showSection === "What is CraveYum Customer Care Number?"}
        setIsVisible={() => {
          return setShowSection(
            showSection === "What is CraveYum Customer Care Number?"
              ? ""
              : "What is CraveYum Customer Care Number?"
          );
        }}
      />
      <Section
        title={"Can I edit my order?"}
        desc={
          "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents"
        }
        isVisible={showSection === "Can I edit my order?"}
        setIsVisible={() => {
          return setShowSection(
            showSection === "Can I edit my order?" ? "" : "Can I edit my order?"
          );
        }}
      />
      <Section
        title={"I want to cancel my order"}
        desc={
          "YWe will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed."
        }
        isVisible={showSection === "I want to cancel my order"}
        setIsVisible={() => {
          return setShowSection(
            showSection === "I want to cancel my order"
              ? ""
              : "I want to cancel my order"
          );
        }}
      />
      <Section
        title={"Will CraveYum be accountable for quality/quantity?"}
        desc={
          "Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant."
        }
        isVisible={
          showSection === "Will CraveYum be accountable for quality/quantity?"
        }
        setIsVisible={() => {
          return setShowSection(
            showSection === "Will CraveYum be accountable for quality/quantity?"
              ? ""
              : "Will CraveYum be accountable for quality/quantity?"
          );
        }}
      />
      <Section
        title={"Do you charge for delivery?"}
        desc={
          "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. "
        }
        isVisible={showSection === "Do you charge for delivery?"}
        setIsVisible={() => {
          return setShowSection(
            showSection === "Do you charge for delivery?"
              ? ""
              : "Do you charge for delivery?"
          );
        }}
      />
      <Section
        title={"Can I change the address / number?"}
        desc={
          "Any major change in delivery address is not possible after you have placed an order with us. However, slight modifications like changing the flat number, street name, landmark etc. are allowed. If you have received delivery executive details, you can directly call him, else you could contact our customer service team."
        }
        isVisible={showSection === "Can I change the address / number?"}
        setIsVisible={() => {
          return setShowSection(
            showSection === "Can I change the address / number?"
              ? ""
              : "Can I change the address / number?"
          );
        }}
      />
      <Section
        title={"What are your delivery hours?"}
        desc={
          "Our delivery hours vary for different locations and depends on availability of supply from restaurant partners."
        }
        isVisible={showSection === "What are your delivery hours?"}
        setIsVisible={() => {
          return setShowSection(
            showSection === "What are your delivery hours?"
              ? ""
              : "What are your delivery hours?"
          );
        }}
      />
      <Section
        title={"Can I order from any location?"}
        desc={
          "We will deliver from any restaurant listed on the search results for your location. We recommend enabling your GPS location finder and letting the app auto-detect your location."
        }
        isVisible={showSection === "Can I order from any location?"}
        setIsVisible={() => {
          return setShowSection(
            showSection === "Can I order from any location?"
              ? ""
              : "Can I order from any location?"
          );
        }}
      />
    </div>
  );
};

export default About;
