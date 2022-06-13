<template>
    <section class="section text-center">
        <div class="text-center">
            <h1>I am Justus Penn<br>Web/Mobile Developer<br>Based in Bamenda, Cameroon.</h1>
        </div>
    </section>
    <section class="section-bottom bio">
        <div class="row align-items-center">
            <div class="col-12 col-md-3 col-lg-2">
                <div class="about">
                    <span class="h6 d-block">BIOGRAPHY</span>
                    <span>Self driven, passionate developer with a curious mind to solve challenging real life problems.</span>
                </div>
                <div class="about">
                    <span class="h6 d-block">CONTACT</span>
                    <span>Bamenda, Cameroon <br> justuspenn@gmail.com <br> +237 6 51 04 84 90 </span>
                </div>
                <div class="about">
                    <span class="h6 d-block">Services</span>
                    <span>Teaching <br>Graphic Designer <br> Web Developer <br> Mobile Developer</span>
                </div>      
            </div>
            <div class="col-12 col-md-6 col-lg-8 d-flex justify-content-center">
                <img :src="jpenn" alt="Justus Penn" class="jpenn-img">
            </div>
            <div class="col-12 col-md-3 col-lg-2 text-end">
                <div class="about">
                    <span class="h6 d-block">EDUCATION</span>
                    <span>FSLC - 2007 <br>CGCE OL - 2012 <br> CGCE AL - 2014 <br> UDT, UBa - 2018 <br> BTech, UBa - 2019</span>
                </div>   
                <div class="about">
                    <span class="h6 d-block">LANGUAGE</span>
                    <span>English - Native <br>French - Beginner <br> German - Beginner</span>
                </div>   
                <div class="about">
                    <span class="h6 d-block">PROJECTS DONE</span>
                    <span class="number">12</span>
                </div>   
            </div>
        </div>
    </section>

    <section class="section skills">
        <h1 class="text-center mb-4">My Skills</h1>
        <div class="row">
            <div class="col-6 col-md-2" v-for="(skill, i) in skills" :key="i"><skill :skill="skill"></skill></div>
        </div>
    </section>

    <section class="section education">
        <h1 class="text-center mb-4">Education & Experience</h1>
        <div class="row">
            <div class="col-12 col-md-3 exp">
                <h6>First School Leaving Certificate</h6>
                <span>Joan Of Arc NPS - 2007</span>
            </div>
            <div class="col-12 col-md-3 exp">
                <h6>Cameroon GCE Ordinary Level</h6>
                <span>PHS Andek, Ngie - 2012</span>
            </div>
            <div class="col-12 col-md-3 exp">
                <h6>Cameroon GCE Advance Level</h6>
                <span>PSS NKWEN, Bamenda - 2014</span>
            </div>
            <div class="col-12 col-md-3 exp">
                <h6>Camtel - Intern</h6>
                <span>Bamenda - 2016</span>
            </div>
            <div class="col-12 col-md-3 exp">
                <h6>Bright World Group LTD - Intern</h6>
                <span>Biyem assi, Yaounde - 2018</span>
            </div>
            <div class="col-12 col-md-3 exp">
                <h6>University Diploma of Technology - Software Engineering</h6>
                <span>COLTECH, UBa - 2018</span>
            </div>
            <div class="col-12 col-md-3 exp">
                <h6>Bachelors of Technology - Software Engineering</h6>
                <span>COLTECH, UBa - 2019</span>
            </div>
            <div class="col-12 col-md-3 exp">
                <h6>Nexinch LLC - Software Architect</h6>
                <span>Nkwen, Bamenda - Present</span>
            </div>
        </div>
    </section>
    
    <section class="section work">
        <h1 class="text-center mb-4">My Recent Work</h1>
        <div class="row">
            <div class="col-12 col-md-4" v-for="(work, i) in projects" :key="i"><work :work="work"/></div>
        </div>
    </section>

</template>

<script>
import jpenn_img from '../assets/jpenn.jpg'
// Skill Images
import html from '../assets/img/skill/html.png'
import css from '../assets/img/skill/css.png'
import bootstrap from '../assets/img/skill/bootstrap.png'
import javas from '../assets/img/skill/javas.png'
import laravel from '../assets/img/skill/laravel.png'
import vue from '../assets/img/skill/vue.png'
import git from '../assets/img/skill/git.png'
import flutter from '../assets/img/skill/flutter.png'
import mysql from '../assets/img/skill/mysql.png'
import mongo from '../assets/img/skill/mongodb.png'
import node from '../assets/img/skill/node-js.png'
import wordpress from '../assets/img/skill/wordpress.png'

// Work Images
import nahpi from '../assets/img/work/nahpi.png'
import nexinch from '../assets/img/work/nexinch.png'
import iurb from '../assets/img/work/iurb.png'

//Components
import Skill from '../components/Skill.vue'
import Work from '../components/Work.vue' 

export default {
    components: { Skill, Work },
    data() {
        return {
            jpenn: jpenn_img,
            skills: [
                {
                    name: 'HTML 5',
                    image: html,
                    rate: 95
                },
                {
                    name: 'CSS 3',
                    image: css,
                    rate: 85
                },
                {
                    name: 'Bootstrap',
                    image: bootstrap,
                    rate: 85
                },
                {
                    name: 'JAVASCRIPT',
                    image: javas,
                    rate: 80
                },
                {
                    name: 'LARAVEL',
                    image: laravel,
                    rate: 85
                },
                {
                    name: 'VUE',
                    image: vue,
                    rate: 70
                },
                {
                    name: 'GIT',
                    image: git,
                    rate: 70
                },
                {
                    name: 'FLUTTER',
                    image: flutter,
                    rate: 70
                },
                {
                    name: 'MySQL',
                    image: mysql,
                    rate: 70
                },
                {
                    name: 'MONGO DB',
                    image: mongo,
                    rate: 70
                },
                {
                    name: 'NodeJS',
                    image: node,
                    rate: 70
                },
                {
                    name: 'WORDPRESS',
                    image: wordpress,
                    rate: 70
                },
            ],
            projects: [
                {
                    service: 'web development',
                    title: 'NAHPI Website',
                    img: nahpi
                },
                {
                    service: 'web development',
                    title: 'Nexinch LLC Website',
                    img: nexinch
                },
                {
                    service: 'web development',
                    title: 'IURB Website',
                    img: iurb
                },
            ]
        }
    },
}
</script>

<style>

</style>