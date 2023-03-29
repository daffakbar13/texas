import React from 'react'

const defaultTableProps: JSX.IntrinsicElements['table'] = {
  role: 'presentation',
  cellPadding: 0,
  cellSpacing: 0,
  width: '100%',
}

export default function RootLayout(props: React.PropsWithChildren) {
  const { children } = props
  return (
    <table {...defaultTableProps}>
      <tbody>
        <tr>
          <td align="center">
            <table
              {...defaultTableProps}
              style={{ maxWidth: '600px', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)' }}
            >
              <tbody>
                <tr>
                  <td valign="top">
                    <main style={{ height: '100vh', overflow: 'scroll', padding: '0 24px' }}>
                      {children}
                    </main>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
