import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  { question: "What types of electrical services do you provide?", questionHi: "आप किन प्रकार की विद्युत सेवाएँ प्रदान करते हैं?", answer: "We offer HT & LT power distribution, transformer installation (25kV to 100kV+), electrical pole installation, DP setup, solar system installation, and industrial/commercial electrification.", answerHi: "हम HT & LT पावर डिस्ट्रीब्यूशन, ट्रांसफार्मर इंस्टॉलेशन, इलेक्ट्रिकल पोल इंस्टॉलेशन, DP सेटअप, सौर ऊर्जा प्रणाली स्थापना सेवाएं प्रदान करते हैं।" },
  { question: "Are you a government-registered contractor?", questionHi: "क्या आप एक सरकारी पंजीकृत विद्युत ठेकेदार हैं?", answer: "Yes, Adarsh Infrastructure is an A-Class Government Registered Electrical Contractor, authorized for both government and private sector electrical projects.", answerHi: "हाँ, आदर्श इंफ्रास्ट्रक्चर एक A-Class सरकारी पंजीकृत विद्युत ठेकेदार है।" },
  { question: "Do you provide rural electrification services?", questionHi: "क्या आप ग्रामीण क्षेत्रों में विद्युतीकरण सेवाएँ प्रदान करते हैं?", answer: "Yes, we specialize in both urban and rural electrification, including transformer installation, electrical poles, and distribution panels (DPs) for villages.", answerHi: "हाँ, हम शहरी और ग्रामीण दोनों क्षेत्रों में विद्युतीकरण सेवाएं प्रदान करते हैं।" },
  { question: "What transformer capacities do you install?", questionHi: "आप कौन-कौन से ट्रांसफार्मर स्थापित करते हैं?", answer: "We install transformers of various capacities, including 25kV, 50kV, 75kV, 100kV, and more based on project requirements.", answerHi: "हम 25kV, 50kV, 75kV, 100kV और अन्य क्षमता वाले ट्रांसफार्मर स्थापित करते हैं।" },
  { question: "Do you provide solar power solutions?", questionHi: "क्या आप सौर ऊर्जा समाधान प्रदान करते हैं?", answer: "Yes, we offer complete solar power installations, including rooftop solar, ground-mounted solar, and hybrid energy solutions.", answerHi: "हाँ, हम पूर्ण सौर ऊर्जा प्रणाली स्थापना प्रदान करते हैं।" },
  { question: "How can I get a quote for my project?", questionHi: "मैं कोटेशन कैसे प्राप्त कर सकता हूँ?", answer: "You can contact us via phone (+91 88897 41005), email, or WhatsApp and our team will evaluate your project and provide a detailed quotation.", answerHi: "आप हमें फोन, ईमेल या WhatsApp के माध्यम से संपर्क कर सकते हैं।" },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="section-heading">Frequently Asked <span className="text-gold">Questions</span></h2>
          <div className="section-divider" />
          <p className="section-subheading">Get answers to common questions about our services.</p>
        </motion.div>

        <div className="space-y-2.5 sm:space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-card-border rounded-lg sm:rounded-xl overflow-hidden hover:border-primary/20 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                className="w-full text-left p-4 sm:p-5 flex justify-between items-center gap-3 sm:gap-4 bg-card-gradient hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                aria-expanded={index === openIndex}
              >
                <div className="min-w-0">
                  <span className="text-white font-semibold block text-sm sm:text-base">{faq.question}</span>
                  <span className="text-gray-500 text-xs sm:text-sm mt-0.5 block">{faq.questionHi}</span>
                </div>
                <FaChevronDown className={`text-primary flex-shrink-0 text-xs sm:text-sm transition-transform duration-300 ${index === openIndex ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {index === openIndex && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-card-border pt-3 sm:pt-4">
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-1.5 sm:mb-2">{faq.answer}</p>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{faq.answerHi}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
