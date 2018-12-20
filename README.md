# Frontend Test (React Performance)

## Introduction

This is a simple exercise for us to gauge your React/Frontend engineering proficiency. You will be implementing a region picker (see image below) with performance in mind.

![Frontend Test](https://media.giphy.com/media/2UH793kyekHUb3YUmZ/giphy.gif)

## Problem

In our form, we have a section where the applicant has to fill out an application form that includes his/her subdistrict.

In Indonesia, there are many subdistricts (a flat 12.5mb file). With many of our users being on low-end phones with , it is not feasible to load all subdistricts into a dropdown menu.

We want to implement an address picker that allows him/her to narrow down the selection through province, city, districts, and subdistricts (see gif above).

## Some guiding questions

- What are some ways to increase the performance of this form?
- How many roundtrips to the server does it take to fill the 4 fields? What would happen if the user is on a 3G connection?
- Is there a way to reduce the wait time on the frontend once a user has selected the previous field (i.e. Province)?
- Super bonus point: is there a way you can intelligently guess a users' location, to prefetch fields? (hint: you can assume the user is on a mobile phone that has mobile chrome)

## Resources

### APIs:

You are given the following APIs to build this form. You can use [Postman](https://www.getpostman.com/) or good ol' curl to see the data format returned from the API.

#### Provinces (Provinsi)

`GET` `https://danacita.co.id/api/locations/v1/provinces`

#### Cities (Kota/Kabupaten)

`GET` `https://danacita.co.id/api/locations/v1/cities?province_id=<province_id>`

`GET` https://danacita.co.id/api/locations/v1/cities?province_id=1

#### Districts (Kecamatan)

`GET` `https://danacita.co.id/api/locations/v1/districts?city_id=<city_id>`

`GET` https://danacita.co.id/api/locations/v1/districts?city_id=1

#### Subdistricts (Kelurahan)

`GET` `https://danacita.co.id/api/locations/v1/subdistricts?district_id=<district_id>`

`GET` https://danacita.co.id/api/locations/v1/subdistricts?district_id=1
