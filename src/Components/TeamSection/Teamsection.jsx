import React from "react";
import "./Teansection.css";
import { FaTwitter, FaFacebookF, FaGoogle, FaInstagram, FaClipboardList } from "react-icons/fa";
import staff1 from "../../assets/images/staff-1.jpg.webp";
import staff2 from "../../assets/images/staff-2.jpg.webp";
import staff3 from "../../assets/images/staff-3.jpg.webp";
import staff4 from "../../assets/images/staff-4.jpg.webp";
import staff5 from "../../assets/images/staff-5.jpg.webp";
import staff6 from "../../assets/images/staff-6.jpg.webp";
import staff7 from "../../assets/images/staff-7.jpg.webp";
import staff8 from "../../assets/images/staff-8.jpg.webp";

// Dummy team data
const team = [
  {
    id: 1,
    name: "Lloyd Wilson",
    role: "Counselor",
    desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    img: staff1
  },
  {
    id: 2,
    name: "Rachel Parker",
    role: "Counselor",
    desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    img: staff2
  },
  {
    id: 3,
    name: "Ian Smith",
    role: "Counselor",
    desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    img: staff3
  },
  {
    id: 4,
    name: "Alicia Henderson",
    role: "Counselor",
    desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    img: staff4
  },
  {
    id: 5,
    name: "Lloyd Wilson",
    role: "Counselor",
    desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    img: staff5
  },
  {
    id: 6,
    name: "Rachel Parker",
    role: "Counselor",
    desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    img: staff6
  },
  {
    id: 7,
    name: "Ian Smith",
    role: "Counselor",
    desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    img: staff7
  },
  {
    id: 8,
    name: "Alicia Henderson",
    role: "Counselor",
    desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    img: staff8
  }
];

const TeamSection = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {team.map((member) => (
          <div className="col-md-3 mb-4" key={member.id}>
            <div className="card shadow-sm border-0 h-100 text-center team-card">
              {/* Image */}
              <img
                src={member.img}
                alt={member.name}
                className="card-img-top"
              />

              {/* Social icons */}
              <div className="social-icons">
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaGoogle /></a>
                <a href="#"><FaInstagram /></a>
              </div>

              {/* Card body */}
              <div className="card-body my-3">
                <h5 className="card-title">{member.name}</h5>
                <p className="text-success text-uppercase small fw-bold">
                  {member.role}
                </p>
                <p className="text-muted">{member.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
