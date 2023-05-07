import './globals.css'
import AppProviders from './AppProviders';

export default function RootLayout( { children, session } ) {
  return (
    <html lang="en">
      <head />
          <body>
            <AppProviders session={session}>
              {children}
            </AppProviders>
          </body>
    </html>
  )
}
