import React, { useEffect, useRef, useState } from "react";

// Typography কম্পোনেন্ট: ডায়নামিকভাবে টেক্সট, লিস্ট এবং ইমেজ দেখানোর জন্য, ফেইড-ইন, স্লাইড-ইন এবং টাইপরাইটার এফেক্ট সহ
const Typography = ({ h1, h2, p, li1, li2, li3, li4, li5, div, img }) => {
  // ডায়নামিক রেফ এবং স্টেট তৈরি
  const h1Ref = useRef(null); // h1 ট্যাগের জন্য রেফ
  const h2Ref = useRef(null); // h2 ট্যাগের জন্য রেফ
  const pRef = useRef(null); // p ট্যাগের জন্য রেফ
  const divRef = useRef(null); // ফুটার div ট্যাগের জন্য রেফ
  const imgRef = useRef(null); // ইমেজের জন্য রেফ

  // লিস্ট আইটেমগুলোর জন্য ডায়নামিক রেফ এবং স্টেট
  const listItems = [li1, li2, li3, li4, li5].filter(Boolean); // শুধুমাত্র যেগুলোর মান আছে সেগুলো ফিল্টার করা
  const liRefs = useRef(listItems.map(() => React.createRef())); // ডায়নামিক রেফ অ্যারে
  const [listTexts, setListTexts] = useState(listItems.map(() => "")); // ডায়নামিক স্টেট অ্যারে

  // অন্যান্য এলিমেন্টের জন্য স্টেট
  const [h1Text, setH1Text] = useState("");
  const [h2Text, setH2Text] = useState("");
  const [pText, setPText] = useState("");
  const [divText, setDivText] = useState("");

  // টাইপরাইটার এফেক্ট ফাংশন
  const typeWriter = (text, setText, speed = 50) => {
    let i = 0;

    const interval = setInterval(() => {
      if (i < text.length) {
        setText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
  };

  // useEffect হুক: অ্যানিমেশন সেটআপ করা
  useEffect(() => {
    // সব এলিমেন্টের জন্য ডেটা এবং রেফ ম্যাপ করা
    const elements = [
      { ref: h1Ref, text: h1, setText: setH1Text },
      { ref: h2Ref, text: h2, setText: setH2Text },
      { ref: pRef, text: p, setText: setPText },
      ...listItems.map((text, index) => ({
        ref: liRefs.current[index],
        text,
        setText: (newText) =>
          setListTexts((prev) =>
            prev.map((item, i) => (i === index ? newText : item))
          ),
      })),
      { ref: divRef, text: div, setText: setDivText },
      { ref: imgRef, text: "", setText: () => {} }, // ইমেজের জন্য টাইপরাইটার এফেক্ট নেই
    ].filter(({ text }) => text || img); // শুধুমাত্র যেগুলোর টেক্সট বা ইমেজ আছে
    // প্রতিটি এলিমেন্টের জন্য অ্যানিমেশন সেটআপ
    elements.forEach(({ ref, text, setText }, index) => {
      if (ref.current) {
        ref.current.style.opacity = "0";
        ref.current.style.transform = "translateY(16px)";
        ref.current.style.transition =
          "opacity 0.5s ease-out, transform 0.5s ease-out";

        setTimeout(() => {
          ref.current.style.opacity = "1";
          ref.current.style.transform = "translateY(0)";

          // ইমেজের জন্য টাইপরাইটার এফেক্ট প্রয়োজন নেই
          if (text) {
            setTimeout(() => {
              typeWriter(text, setText, 50);
            }, 500);
          }
        }, index * 5000); // প্রতিটি এলিমেন্টের ফেইড-ইন ডিলে
      }
    });
  }, [h1, h2, p, li1, li2, li3, li4, div, img]); // প্রপস পরিবর্তন হলে useEffect আবার চলবে

  // JSX রিটার্ন: UI রেন্ডার করা
  return (
    <div className="text-green-600">
      {/* h1 রেন্ডার করা */}
      {h1 && (
        <h1
          ref={h1Ref}
          className="text-3xl font-bold mb-4 text-amber-200 border-l-4 border-orange-400 pl-2"
        >
          {h1Text}
        </h1>
      )}

      {/* h2 রেন্ডার করা */}
      {h2 && (
        <h2
          ref={h2Ref}
          className="text-2xl font-semibold mb-4 border-l-4 border-orange-400 pl-2"
        >
          {h2Text}
        </h2>
      )}

      {/* প্যারাগ্রাফ রেন্ডার করা */}
      {p && (
        <p ref={pRef} className="mb-4">
          {pText}
        </p>
      )}

      {/* লিস্ট রেন্ডার করা */}
      {listItems.length > 0 && (
        <ul className="list-disc pl-6 space-y-2">
          {listItems.map((_, index) => (
            <li key={index} ref={liRefs.current[index]} className="list-item">
              {listTexts[index]}
            </li>
          ))}
        </ul>
      )}

      {/* ইমেজ রেন্ডার করা */}
      {img && (
        <img
          ref={imgRef}
          src={img}
          alt="Typography Image"
          className="mt-4 max-w-full h-auto"
        />
      )}

      {/* ফুটার ডিভ রেন্ডার করা */}
      {div && (
        <div ref={divRef} className="mt-6 text-sm">
          {divText}
        </div>
      )}
    </div>
  );
};

// কাস্টম CSS স্টাইল যোগ করা
const styles = `
  .list-item::before {
    content: "• ";
    color: inherit;
  }
  .list-item {
    margin-bottom: 0.5rem;
  }
  .list-item span {
    font-weight: 600;
  }
`;

// স্টাইলটি পেজে যোগ করা
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Typography;
