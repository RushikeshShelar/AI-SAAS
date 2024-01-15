# Synthai - AI SaaS Project

Welcome to Synthai, your all-in-one AI SaaS solution that brings powerful features for various tasks. Whether you need to have intelligent conversations, generate code, create images, videos, or music, Synthai has got you covered. Let's explore its features and the technology behind it!

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- **Authentication**: Easily log in or sign up to access the full range of Synthai features.
- **Conversation Mode**: Engage in conversations just like ChatGPT, making interactions seamless and natural.
- **Code Generation**: Generate code effortlessly by providing prompts to Synthai.
- **Image Generation**: Create high Quality images by describing what you envision.
- **Video Generation**: Turn your prompts into captivating videos with Synthai.
- **Music Generation**: Let Synthai compose music based on your prompts.
- **Subscription Model**: To continue enjoying Synthai's services, users can subscribe for ongoing access.


## Tech Stack

- **Frontend:** React.js, Next.js, and TypeScript 
- **Backend:** Next.js.
- **Database & ORM:** MySQL, Prisma, and PlanetScale.
- **Styling:** Tailwind CSS, Shadcn UI
- **AI Services:**
  - Conversation, Code & Image Generation: [OpenAI](https://openai.com/)
  - Music and Video Generation: [Replicate.ai](https://replicate.com/)
- **Subscription & Payment Gateway:** Integrated with Stripe for secure and convenient transactions.
- **Version Control:** Managed with Git and GitHub.
- **Hosting:** Deployed on Vercel.

### Installation

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/RushikeshShelar/AI-SAAS.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |



## Acknowledgements

 - [codewithantonio](https://www.codewithantonio.com/)
 - [Harkirat Singh](https://100xdevs.com/)

## License:

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors

- [@Rushikesh Shelar](https://www.github.com/RushikeshShelar)


## Contact
For any inquiries, reach out to [Rushikesh Shelar](mailto:rushikeshshelar.cs@gmail.com).
