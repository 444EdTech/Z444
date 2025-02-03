import React, { useState } from 'react';

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeIndexes, setActiveIndexes] = useState([]);

  const faqs = {
    1: [
      {
        question: "What is the primary purpose of joining Z444?",
        answer: "Z444 is dedicated to guiding individuals on their personal and professional journeys. By joining, you gain access to a supportive community that helps you navigate challenges, set goals, and stay committed to your aspirations."
      },
      {
        question: "How does Z444 help with dedication issues?",
        answer: "We understand that maintaining dedication can be challenging. Z444 provides personalized guidance, accountability partners, and motivational resources to help you overcome obstacles and stay focused on your goals."
      }
    ],
    2: [
      {
        question: "What kind of guidance does Z444 offer?",
        answer: "Z444 offers guidance in various areas including career development, personal growth, and goal setting. We provide tools and strategies to help you identify your objectives and create actionable plans."
      },
      {
        question: "Can I find resources to help me stay dedicated?",
        answer: "Yes! Z444 offers a variety of resources such as workshops on time management, productivity tips, and mindset coaching designed to help you cultivate dedication and achieve your goals."
      }
    ]
  };

  const toggleFAQ = (index) => {
    setActiveIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter(i => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  return (
    <section className="tabs-faq">
      <div className="dummy-faq-spacer">
        <div className="new-content-section">
          <h2 className="new-content_heading">FAQs</h2>
        </div>
      </div>
      <div
        data-current={`Tab ${activeTab}`}
        data-easing="ease"
        data-duration-in={300}
        data-duration-out={100}
        className="w-tabs"
      >
        <div className="faq-tabs-menu w-tab-menu">
          <a
            data-w-tab="Tab 1"
            onClick={() => setActiveTab(1)}
            className={`faq-tab w-inline-block w-tab-link ${activeTab === 1 ? 'w--current' : ''}`}
          >
            <div className="faq-tabs-heading">Why should I join Z444?</div>
          </a>
          <a
            data-w-tab="Tab 2"
            onClick={() => setActiveTab(2)}
            className={`faq-tab w-inline-block w-tab-link ${activeTab === 2 ? 'w--current' : ''}`}
          >
            <div className="faq-tabs-heading">Learning experience related</div>
          </a>
        </div>

        <div className="w-tab-content">
          <div data-w-tab="Tab 1" className={`w-tab-pane ${activeTab === 1 ? 'w--tab-active' : ''}`}>
            <div className="new-faq-content">
              <div className="faq-component">
                <div className="faq-list">
                  {faqs[1].map((faq, index) => (
                    <div key={index} className="new-faq-acc">
                      <div className="new-faq-ques" onClick={() => toggleFAQ(index)}>
                        <div className="new-faq-heading">{faq.question}</div>
                        <div className="new-faq-icon-wrapper">
                          <div className="new-faq-icon">
                            {/* Conditionally render icons based on active state */}
                            {activeIndexes.includes(index) ? (
                              <div className="new-faq-hot" /> // Show only vertical icon when expanded
                            ) : (
                              <>
                                <div className="new-faq-hor" />
                                <div className="new-faq-ver" />
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      {activeIndexes.includes(index) && (
                        <div className="new-faq-ans">
                          <div className="new-faq-ans-rich-text w-richtext">
                            <p>{faq.answer}</p>
                          </div>
                          <div className="_24-12-8" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="_48-32-24" />
            </div>
          </div>

          <div data-w-tab="Tab 2" className={`w-tab-pane ${activeTab === 2 ? 'w--tab-active' : ''}`}>
            <div className="new-faq-content">
              <div className="faq-component">
                <div className="faq-list">
                  {faqs[2].map((faq, index) => (
                    <div key={index} className="new-faq-acc">
                      <div className="new-faq-ques" onClick={() => toggleFAQ(index)}>
                        <div className="new-faq-heading">{faq.question}</div>
                        <div className="new-faq-icon-wrapper">
                          <div className="new-faq-icon">
                            {/* Conditionally render icons based on active state */}
                            {activeIndexes.includes(index) ? (
                              <div className="new-faq-hor" /> // Show only vertical icon when expanded
                            ) : (
                              <>
                                <div className="new-faq-hor" />
                                <div className="new-faq-ver" />
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      {activeIndexes.includes(index) && (
                        <div className="new-faq-ans">
                          <div className="new-faq-ans-rich-text w-richtext">
                            <p>{faq.answer}</p>
                          </div>
                          <div className="_24-12-8" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="_48-32-24" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
