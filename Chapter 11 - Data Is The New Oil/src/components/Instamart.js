import { useState } from "react";

const Instamart = () => {
    
    const [visibleSection, SetIsVisibleSection ] = useState("about");

  return (
    <>
      <h1>This is Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam quis quas officia ad esse inventore ullam mollitia vel suscipit fugiat deserunt error necessitatibus ipsa pariatur consequatur obcaecati, omnis aspernatur ducimus."
        }
        isVisible={visibleSection === "about"}
        SetIsVisible={(val)=>{val ? SetIsVisibleSection("about"):SetIsVisibleSection("")}}
      />

      <Section
        title={"Teams"}
        description={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam quis quas officia ad esse inventore ullam mollitia vel suscipit fugiat deserunt error necessitatibus ipsa pariatur consequatur obcaecati, omnis aspernatur ducimus."
        }
        isVisible={visibleSection === "teams"}
        SetIsVisible={(val)=>{val ? SetIsVisibleSection("teams"):SetIsVisibleSection("")}}
      />

      <Section
        title={"Careers"}
        description={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam quis quas officia ad esse inventore ullam mollitia vel suscipit fugiat deserunt error necessitatibus ipsa pariatur consequatur obcaecati, omnis aspernatur ducimus."
        }
        isVisible={visibleSection === "careers"}
        SetIsVisible={(val)=>{val ? SetIsVisibleSection("careers"):SetIsVisibleSection("")}}
      />
    </>
  );
};

const Section = ({ title, description,isVisible,SetIsVisible }) => {
  

  return (
    <div className="border-black border p-2 m-2 w-96">
      <h1 className="inline-block">{title}</h1>

      {isVisible == false ? (
        <button
          className="p-1 ml-1 border border-black"
          onClick={() => SetIsVisible(true)}
        >
          Show
        </button>
      ) : (
        <button
          className="p-1 ml-1 border border-black"
          onClick={() => SetIsVisible(false)}
        >
          Hide
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

export default Instamart;
