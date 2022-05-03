const QUESTION_URL = "https://jsonplaceholder.typicode.com/users/";

{
  /* <div class="category">
  <h2>HTML</h2>
  <div className="name">
    <h3>Stop watch</h3>
  </div>
  <div className="name">
    <h3>question</h3>
  </div>
</div>; */
}

fetchAndAppendQueston();

async function fetchAndAppendQueston() {
  const questions = await fetchingQuestions();
  const questionsByCategory = getQustionByCategory(questions);
  const wrapper = document.getElementById("wrapper");
  for (const [category, questions] of Object.entries(questionsByCategory)) {
    console.log(category, questions);
    const categoryDiv = createCategory(category, questions);
    wrapper.append(categoryDiv);
  }
}

function createCategory(category, questions) {
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("category");
  const h2 = document.createElement("h2");
  h2.textContent = category;
  categoryDiv.append(h2);
  questions.forEach((question) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    const h3 = document.createElement("h3");
    h3.textContent = question.name;
    questionDiv.append(h3);
    categoryDiv.append(question);
  });
  return categoryDiv;
}

async function fetchingQuestions() {
  const response = await fetch(QUESTION_URL);
  const questions = await response.json();
  return questions;
}

function getQustionByCategory(questions) {
  const questionsByCategory = {};
  questions.forEach((question) => {
    if (questionsByCategory.hasOwnProperty(question.name)) {
      questionsByCategory[question.name].push(question.name);
    } else {
      questionsByCategory[question.name] = [question.phone];
    }
  });
  return questionsByCategory;
}
