import Upcomingevents from "../../assets/upcmingevent.webp";
import { Link } from "react-router-dom";
import "./WhatWeDo.css";
export const WhatWeDo = () => {
  const pages = [
    {
      id: "article1",
      img: Upcomingevents,
      title: "BIKE PROJECT for the children of Puvirnituq!",
      description:
        "When we heard the recent news of the remains of thousands of children being found at the former Residential Schools, we knew it was a time to grieve and to also give back to our children. Children deserve a happy childhood!!!!! This summer we want to give back to the children of our community located in Puvirnituq, Qc.",
    },
    {
      id: "article2",
      img: Upcomingevents,
      title: "RELIEF FOR RESIDENTS OF SURFSIDE FL CONDO COLLAPSE",
      description:
        "Overnight on June 24th, 2021 at the Champlain Towers South building in Surfside, FL there was a catastrophic building collapse encompassing over half of the building. 18 people have been found deceased and there are currently 146 people unaccounted for ranging from young children to senior citizens as well as countless displaced families that now have no homes. Please help us raise funds to be distributed to the families that are affected. This is a horrible tragedy and let's do our part to help in any way we can. ",
    },
    {
      id: "article3",
      img: Upcomingevents,
      title: "Little Thumbelina Girl’s Surgery",
      description:
        "Little Thumbelina was rescued at only a few hours old. Her and her sister were taken in by wildlife rehabbers when her Mom’s nest was destroyed.  Sadly, Thumbelina’s sister passed only a few hours later, but Thumbelina fought through those critical days, and did her best.",
    },
    {
      id: "article4",
      img: Upcomingevents,
      title: "Spike Needs a New Shell",
      description:
        "We need your help to save Spike and have a new shell made for him. We've already found the firm that can help us engineer a solution, but his medical care, travel and testing, and materials for a custom-fitted, prosthetic carapace will be expensive. Thank you for your help in saving this gentle giant who came to us as a rescue, after his family abandoned him to Animal Control.",
    },
    {
      id: "article5",
      img: Upcomingevents,
      title: "Humanitarian COVID-19 Relief Fund",
      description:
        "Since before April 2020, UNITED SIKHS’ global emergency response teams have focused on responding to the emerging COVID-19 crisis.  We have served cooked meals, distributed masks, water, hand sanitizers, groceries and care packages to millions of global citizens affected by COVID-19 from North America to Asia.",
    },
    {
      id: "article6",
      img: Upcomingevents,
      title: "Help Save East Brother Light Station",
      description:
        "After electrical power was lost to East Brother Light Station on April 1, 2021, due to a damaged underwater cable, a team of volunteers with impressive expertise was able to cobble together an emergency repair nearly two months later on May 28, 2021. The existing cable was pulled up from the Bay enough to locate and cut out the damaged portion and splice the undamaged portions together. Much work is left to be done, including replacing and upgrading service equipment at both the land side and island side of the cable termination, all of which is in progress.",
    },
    {
      id: "article7",
      img: Upcomingevents,
      title: "Coast to Coast Challenge 2021",
      description:
        "We are raising money to benefit Amelia-Mae Foundation, and any donation will help make an impact. Thanks in advance for your contribution to this cause that means so much to me.",
    },
  ];
  return (
    <div className="section_wrapper">
      <div className="whatWeDo_wrapper">
        <div>
          {pages.map((a, i) => {
            return (
              <div className="slide">
                <div className="whatWeDo_card_wrapper">
                  <img src={a.img} className="whatWeDo_img" />
                  <div>
                    <div className="whatWeDo_title">{a.title}</div>
                    <div className="whatWeDo_description">{a.description}</div>
                    <Link to="articlePage">View Page</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
