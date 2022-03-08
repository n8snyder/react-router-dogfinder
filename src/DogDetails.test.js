import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DogDetails from "./DogDetails";

const testingDogs = [
  {
    "name": "Duke",
    "age": 3,
    "src": "duke",
    "facts": [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  }
];

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ name: "Duke" }),
}))

describe("DogDetails", function () {
  it("correctly renders dog details", function () {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/dogs/duke"]}>
        <DogDetails dogs={testingDogs} />
      </MemoryRouter>
    );
    expect(getByText("Duke")).toBeInTheDocument();
  });
})
