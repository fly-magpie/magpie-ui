import { Button } from "@/components/ui/button"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import "./App.css"

const App = () => {
  const { login, logout, register, user, isAuthenticated, isLoading } = useKindeAuth();

  if (isLoading) return <p>Loading ...</p>

  return (
    <div className="App">
      <div className="flex">
        <div className="h-screen w-80 bg-teal-100 p-2 flex flex-col">
          <div className="grow">
            {isAuthenticated && <p>{user?.given_name} </p>}
          </div>

          {!isAuthenticated && <div>
            <p className="font-medium text-left mb-1">Sign up or log in</p>
            <p className="font-thin text-sm text-left mb-2">Connect datasource, visualize data, and more.</p>
            <Button className="w-full mb-2" onClick={() => register()}>Sign up</Button>
            <Button className="w-full" onClick={() => login()}>Log in</Button>
          </div>}

        </div>
        <div>
          {isAuthenticated && <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="fixed top-2 right-2" size="icon">
                {user?.given_name?.charAt(0).toUpperCase()}{user?.family_name?.charAt(0).toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-3">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          }
        </div>
      </div>
    </div>
  )
}

export default App
