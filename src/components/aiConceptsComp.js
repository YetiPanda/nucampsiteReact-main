import React from "react";
import aiConcepts from "./aiConcepts.json";

const AIConcepts = () => {
  return (
    <div>
      {aiConcepts.sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          {section.subsections ? (
            section.subsections.map((subsection, subIndex) => (
              <div key={subIndex}>
                <h3>{subsection.title}</h3>
                <ul>
                  {subsection.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <ul>
              {section.topics.map((topic, topicIndex) => (
                <li key={topicIndex}>{topic}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default AIConcepts;
