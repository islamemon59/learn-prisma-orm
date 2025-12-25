import { prisma } from "./lib/prisma";

async function run() {
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: "Hossain",
    //         email: "hossain@gmail.com"
    //     }
    // })

    // const createPost = await prisma.post.create({
    //     data: {
    //         title: "This is a title",
    //         content: "This is a content",
    //         authorId: 1
    //     }
    // })

    // const createProfile = await prisma.profile.create({
    //     data:{
    //         bio: "This is bio",
    //         userId: 1
    //     }
    // })

    // const users = await prisma.user.findMany({
    //     //include give all data 
    //     // include:{
    //     //     posts: true,
    //     //     profile: true
    //     // }

    //     //select specefic data
    //     select: {
    //         posts: true,
    //         profile: true,
    //     }
    // })

    // const updateUser = await prisma.profile.update({
    //     where: {
    //         userId: 1
    //     },
    //     data:{
    //         bio: "This profile bio is updated",
    //         dob: "2025-12-25T04:46:14.338Z"
    //     },
    //     select: {
    //         id: true,
    //         bio: true,
    //         user: {
    //             select: {
    //                 name: true,
    //                 email: true
    //             }
    //         }
    //     }

    // })

    // console.dir( updateUser, {depth: Infinity});

    // const getUser = await prisma.user.findMany({
    //     include: {
    //         posts: true,
    //         profile: true
    //     }
    // })

    // const deleteUser = await prisma.user.delete({
    //     where: {
    //         id: 2
    //     }
    // })

    // const getUserById = await prisma.user.findUnique({
    //     where: {
    //         id: 2
    //     }
    // })

    const upsert = await prisma.user.upsert({
        where: {
            email: "imtiaz@gmail.com"
        },
        update: {
            name: "Imtiaz Ahmed3"
        },
        create: {
            name: "Imtiaz Ahmed4",
            email: "imtiaz@gmail.com"
        }
    })

    console.log(upsert);
}

run()