import { screen, waitFor } from "@testing-library/react"
import App from "../App"
import { renderWithProviders } from "../utils/test-utils"

test.skip("App should have correct initial render", async () => {
  renderWithProviders(<App />)

  await waitFor(() => {
    screen.getByText("Sign up or log in")
  })
  // The app should be rendered correctly
  expect(screen.getByText("Sign up or log in")).toBeInTheDocument()

})

