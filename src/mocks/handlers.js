import { rest } from 'msw';

export const handlers = [
    rest.get('/error', (req, res, ctx) => {
        return res(
            ctx.status(400),
            ctx.json({
                msg : "You have fired an error!"
            })
        )
    }),
    rest.get('/users', (req, res, ctx) => {

        return res(
            ctx.json([
                {
                    id : 1,
                    username : "johndoe1",
                    name : "John",
                    lastname: "Doe",
                    email : "John.doe@email.com"
                },
                {
                    id : 2,
                    username : "janedoe2",
                    name : "Jane",
                    lastname: "Doe",
                    email : "Jane.doe@email.com"
                }
            ])
        )

    }),
    rest.post('/oauth/token', (req, res, ctx) => {

        const { username } = req.body;

        return res(
            ctx.json({
                "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzaHVrdXRAQmFja09mZmljZUFkbWluIiwiZXh0ZXJuYWxQYXJ0eUlkIjoiIiwidXNlcl9uYW1lIjoic2h1a3V0Iiwic2NvcGUiOlsiYWxsX3Blcm1zIl0sImlzcyI6Imh0dHA6Ly93d3cuZ2JzdC5jb20vb2F1dGgyLWF1dGhvcmlzYXRpb24iLCJnYnN0UGFydHlJZCI6InNodWt1dCIsImV4cCI6MTYwNzUwMzAwOCwianRpIjoiRVJBd1duUWZ5S2dUc1VoSVdZWlBybnZGVk44IiwiZ2JzdFBhcnR5VHlwZSI6IkJhY2tPZmZpY2VBZG1pbiIsImNsaWVudF9pZCI6ImNvbXBfYm91aSJ9.F79tNGDhWYoUKb46mfi6QdxK7Q5RjbmUV21TqXaDCDGx0XENEQxC-8mt9yV7lXzOEv06l3dAWEGfnkhzJQE6cEIkBijeRlsWoiM8eqd4E5G3phB9K3_Sj3LtRDOyomZ2NMDzFtAXVXXuYoVeWROBwhr5Yj4qWY0S2H_ZQ1dvcZsESyez8v4U2IBSqG2pvTGRGbLLME1kqVAbYiGvMFRTtwf4cGN6Tzd3BYauNVFQQXWqme8-AnU2hTLe3oW9wyxh8xZGQT1eB13byTL94cKIVn-VbhuI0kB5s20H2j1ZcAleJNmbGtoOtfD3_cof8Ic46oKG9RLAsNI2ZBtaUeW1bQ",
                "token_type": "bearer",
                "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzaHVrdXRAQmFja09mZmljZUFkbWluIiwiZXh0ZXJuYWxQYXJ0eUlkIjoiIiwidXNlcl9uYW1lIjoic2h1a3V0Iiwic2NvcGUiOlsiYWxsX3Blcm1zIl0sImF0aSI6IkVSQXdXblFmeUtnVHNVaElXWVpQcm52RlZOOCIsImlzcyI6Imh0dHA6Ly93d3cuZ2JzdC5jb20vb2F1dGgyLWF1dGhvcmlzYXRpb24iLCJnYnN0UGFydHlJZCI6InNodWt1dCIsImV4cCI6MTYwNzUwMzEwOCwianRpIjoiSFNiYjUzbWFhR0FEcWZSTDNFekJ1WWZoLVlJIiwiZ2JzdFBhcnR5VHlwZSI6IkJhY2tPZmZpY2VBZG1pbiIsImNsaWVudF9pZCI6ImNvbXBfYm91aSJ9.RV6-NNJdci-7_UEIG1bTbjpHpUFJ-0gOdbvUN6uQcSLjzfZ2C5TFqXFuvUvRoKjxCsLMVXt3UmZ8jTe_oJsrpFxE79RAZKeBNgJQ9BL-CdsUZBzajRp0IXjENGuu6Fad__XnnQbxLXP9Y_yumKbIeMaS7COdqI_d9d0UIHIID9Z8t2VcXmmte1qJFlYrESkWxRSzd8YRjsOa9txSGXqEgokFxcZ1GNzqP6gGL1MAkQsjA9AzzCBHlYjn4QaifjaNr4UZJY-uSBeWQIp69rsKZtsYtazRvui-slP0Ug-Pg06zyLuRVjft3Zs_AOFQsyUlnpr0_iwWzpaN5NNUxSLCBA",
                "expires_in": 14399,
                "scope": "all_perms",
                "iss": "http://www.gbst.com/oauth2-authorisation",
                "sub": "shukut@BackOfficeAdmin",
                "gbstPartyId": "shukut",
                "gbstPartyType": "BackOfficeAdmin",
                "externalPartyId": "",
                "jti": "ERAwWnQfyKgTsUhIWYZPrnvFVN8"
            })
        )

    })
//   rest.post('/login', (req, res, ctx) => {
//     const { username } = req.body

//     return res(
//       ctx.json({
//         id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
//         username,
//         firstName: 'John',
//         lastName: 'Maverick',
//       })
//     )
//   }),
]