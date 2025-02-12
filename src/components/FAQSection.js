import { useState } from "react";

const faqs = [
  { 
    question: "What types of electrical services do you provide? / आप किन प्रकार की विद्युत सेवाएँ प्रदान करते हैं?", 
    answer: "We offer HT & LT power distribution, transformer installation (25kV to 100kV+), electrical pole installation, DP setup, solar system installation, and industrial/commercial electrification. / हम HT & LT पावर डिस्ट्रीब्यूशन, ट्रांसफार्मर इंस्टॉलेशन (25kV से 100kV+), इलेक्ट्रिकल पोल इंस्टॉलेशन, DP सेटअप, सौर ऊर्जा प्रणाली स्थापना, और औद्योगिक/व्यावसायिक विद्युतीकरण सेवाएं प्रदान करते हैं।" 
  },
  { 
    question: "Are you a government-registered electrical contractor? / क्या आप एक सरकारी पंजीकृत विद्युत ठेकेदार हैं?", 
    answer: "Yes, Adarsh Infrastructure is an A-Class Government Registered Electrical Contractor, authorized for both government and private sector electrical projects. / हाँ, आदर्श इंफ्रास्ट्रक्चर एक A-Class सरकारी पंजीकृत विद्युत ठेकेदार है, जिसे सरकारी और निजी क्षेत्र की विद्युत परियोजनाओं के लिए अधिकृत किया गया है।" 
  },
  { 
    question: "Do you provide electrification services in rural areas and villages? / क्या आप ग्रामीण क्षेत्रों और गांवों में विद्युतीकरण सेवाएँ प्रदान करते हैं?", 
    answer: "Yes, we specialize in both urban and rural electrification, including transformer installation, electrical poles, and distribution panels (DPs) for villages. / हाँ, हम शहरी और ग्रामीण दोनों क्षेत्रों में विद्युतीकरण सेवाएं प्रदान करते हैं, जिसमें ट्रांसफार्मर इंस्टॉलेशन, विद्युत पोल और वितरण पैनल (DP) शामिल हैं।" 
  },
  { 
    question: "What transformer capacities do you install? / आप कौन-कौन से ट्रांसफार्मर स्थापित करते हैं?", 
    answer: "We install transformers of various capacities, including 25kV, 50kV, 75kV, 100kV, and more, based on the project requirements. / हम 25kV, 50kV, 75kV, 100kV और अन्य क्षमता वाले ट्रांसफार्मर स्थापित करते हैं, जो परियोजना की आवश्यकताओं पर निर्भर करता है।" 
  },
  { 
    question: "Do you handle street lighting and smart automation? / क्या आप स्ट्रीट लाइटिंग और स्मार्ट ऑटोमेशन सेवाएं प्रदान करते हैं?", 
    answer: "Yes, we install street lighting for highways, cities, and industrial zones, along with smart automation systems such as IoT-based power control. / हाँ, हम राजमार्गों, शहरों और औद्योगिक क्षेत्रों के लिए स्ट्रीट लाइटिंग स्थापित करते हैं, साथ ही IoT-आधारित पावर कंट्रोल जैसे स्मार्ट ऑटोमेशन सिस्टम भी प्रदान करते हैं।" 
  },
  { 
    question: "Do you provide solar power solutions? / क्या आप सौर ऊर्जा समाधान प्रदान करते हैं?", 
    answer: "Yes, we offer complete solar power system installations, including rooftop solar, ground-mounted solar, and hybrid energy solutions for industries, homes, and commercial spaces. / हाँ, हम पूर्ण सौर ऊर्जा प्रणाली स्थापना प्रदान करते हैं, जिसमें रूफटॉप सौर ऊर्जा, ग्राउंड-माउंटेड सौर प्रणाली और उद्योगों, घरों और व्यावसायिक स्थानों के लिए हाइब्रिड ऊर्जा समाधान शामिल हैं।" 
  },
  { 
    question: "How can I get a quote for my electrical project? / मैं अपनी विद्युत परियोजना के लिए कोटेशन कैसे प्राप्त कर सकता हूँ?", 
    answer: "You can contact us via phone or email, and our team will evaluate your project requirements and provide a detailed and customized quotation. / आप हमें फोन या ईमेल के माध्यम से संपर्क कर सकते हैं, और हमारी टीम आपकी परियोजना की आवश्यकताओं का मूल्यांकन करके एक विस्तृत और अनुकूलित कोटेशन प्रदान करेगी।" 
  },
];


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-secondary text-white text-center">
      <h3 className="text-4xl font-bold text-primary">FAQs</h3>
      <div className="mt-8 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 bg-background rounded-lg shadow-lg mb-4">
            <button className="text-lg font-semibold text-accent" onClick={() => setOpenIndex(index === openIndex ? null : index)}>
              {faq.question}
            </button>
            {index === openIndex && <p className="mt-2 text-gray-300">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
