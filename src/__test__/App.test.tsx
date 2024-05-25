import { screen } from "@testing-library/react"
import App from "../App"
import { renderWithProviders } from "../utils/test-utils"

test("App should have correct initial render", () => {
  renderWithProviders(<App />)

  // The app should be rendered correctly
  expect(screen.getByText("My react app")).toBeInTheDocument()

})

