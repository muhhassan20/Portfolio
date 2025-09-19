import "./Projects.css"
import React from "react"

const Projects = () => {
  const projects = [
    { name: "Revellio", icon: "R" },
    { name: "Jessop", icon: "J" },
    { name: "VoHides", icon: "V" },
    { name: "PayFran", icon: "P" },
    { name: "ATS Ticketing", icon: "A" },
    { name: "eCare Docha", icon: "E" },
    { name: "iZero", icon: "I" },
    { name: "Top House", icon: "T" },
    { name: "EMS App", icon: "E" },
    { name: "World Enterprises", icon: "W" },
    { name: "Takio", icon: "T" },
    { name: "Pearl Meet", icon: "P" },
    { name: "Water Management System", icon: "W" },
    { name: "Flight Alerts", icon: "F" },
    { name: "Yuna Homes", icon: "Y" },
    { name: "Pet Friendly", icon: "P" },
    { name: "CEEN", icon: "C" },
    { name: "OneHit", icon: "O" },
    { name: "Extra Millios", icon: "E" },
    { name: "Translays", icon: "T" },
    { name: "Deepsea-3D", icon: "D" },
    { name: "Phone Keeper", icon: "P" },
    { name: "Writer's Lock", icon: "W" },
    { name: "Capital Village", icon: "C" },
    { name: "Bondivoo", icon: "B" },
    { name: "Go Explore", icon: "G" },
    { name: "Media Math", icon: "M" },
    { name: "Premium Estimators", icon: "P" },
  ]

  return (
    <div className="projects-container">
      <div className="projects-header">
        <p className="projects-label">Projects</p>
        <h1 className="projects-title">
          Specialize <span className="gray-text">in crafting unique, people-focused</span> Visually Look
          <br />
          <span className="gray-text">strategies that bring ideas to life</span>
        </h1>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <span className="project-name">{project.name}</span>
          </div>
        ))}

        <div className="project-card next-project">
          <span className="project-name">Your Next Project?</span>
        </div>
      </div>
    </div>
  )
}

export default Projects
