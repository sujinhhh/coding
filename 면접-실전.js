const QUESTION_URL = "https://jsonplaceholder.typicode.com/todos/1";

{
  /* <div class="category">
  <h2>HTML</h2>
  <div className="question">
    <h3>Stop watch</h3>
  </div>
  <div className="question">
    <h3>Tic tac toe</h3>
  </div>
</div>; */
}

fetchAndAppendQueston();

async function fetchAndAppendQueston() {
  const questions = await fetchingQuestions();
  console.log(questions);
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

// 1
async function fetchingQuestions() {
  const response = await fetch(QUESTION_URL);
  const questions = response.json();
  // console.log(questions);
  return questions;
}

// 2
function getQustionByCategory(questions) {
  const questionsByCategory = {};
  console.log(questions);
  questions.forEach((question) => {
    if (questionsByCategory.hasOwnProperty(question.name)) {
      questionsByCategory[question.name].push(question.name);
    } else {
      questionsByCategory[question.name] = [question.phone];
    }
  });
  return questionsByCategory;
}
