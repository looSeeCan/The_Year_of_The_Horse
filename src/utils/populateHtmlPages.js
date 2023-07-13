const populateHtmlPages = (item1) => {
  console.log("Hello");
  /// I need to dynamically populte the sections.
  const questionArrObj = [
    "Think back on the last year. What was it about for you?",
    "What were the lessons learned?",
    "What were the things you earned?",
    "What were the things you lost?",
    "What were the things you gained?",
    "What would you change?",
    "What would stay the same?",
    "What was your wish for that year?",
    "What was your favorite dish?",
    "Make yourself a fortune based on last year",
    "What would you call the year? The year of the",
  ];
  console.log(questionArrObj);

  const container = document.getElementById("container");
  console.log(container);

  questionArrObj.map((item) => {
    console.log(item);
    const section = document.createElement("section");
    container.appendChild(section);
    const h3 = document.createElement("h3");
    section.appendChild(h3);
    h3.textContent = item;
  });

  console.log(container);
};

export { populateHtmlPages };
