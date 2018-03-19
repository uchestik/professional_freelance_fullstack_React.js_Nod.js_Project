const rootUrl = `http://localhost:5000`

export function postNewSlider(values,cb){
    const request = fetch(`${rootUrl}/api/homeslider`, {
        method:'POST',
        headers:{
            'Accept':"application/json",
            'Content-Type':"application/json"
        },
        body:JSON.stringify(values)
    }).then(()=>cb());

    return{
        type:'POST_NEW_SLIDER',
        payload:'Slider Posted'
    }
}

export function getHomeSliders(){
    const request = fetch(`${rootUrl}/api/homeslider`,{method:'GET'})
        .then(res=>res.json());

        return{
            type:'GET_HOME_SLIDER',
            payload:request
        }
}

export function getIndividualHomeSliders(id){
    const request = fetch(`${rootUrl}/api/homeslider/${id}`,{method:'GET'})
        .then(res=>res.json());

        return{
            type:'GET_INDIVIDUAL_HOME_SLIDER',
            payload:request
        }
}

export function postEditedSlider(values,id,cb){
    const request = fetch(`${rootUrl}/api/homeslider/${id}`, {
        method:'PUT',
        headers:{
            'Accept':"application/json",
            'Content-Type':"application/json"
        },
        body:JSON.stringify(values)
    }).then(()=>cb());

    return{
        type:'POST_EDITED_SLIDER',
        payload:'Edited Slider Posted'
    }
}

export function deleteSliderItem(id,cb){
    const request = fetch(`${rootUrl}/api/homeslider/${id}`,{method:'DELETE'})
    .then(()=>cb());

        return{
            type:'DELETED_SLIDER_ITEM',
            payload:'POST DELETED'
        }
}

export function clearSlidereDetail(){
    return{
        type:'CLEAR_SLIDER_DETAIL',
        payload:{}
    }
}

export function getAboutData(){
    const request = fetch(`${rootUrl}/api/aboutus`,{method:'GET'})
        .then(res=>res.json());

        return{
            type:'GET_ABOUT_DATA',
            payload:request
        }
}

export function getIndividualAboutData(id){
    const request = fetch(`${rootUrl}/api/aboutus/${id}`,{method:'GET'})
        .then(res=>res.json());

        return{
            type:'GET_INDIVIDUAL_ABOUT_DATA',
            payload:request
        }
}

export function postEditedAbout(values,id,cb){
    const request = fetch(`${rootUrl}/api/aboutus/${id}`, {
        method:'PUT',
        headers:{
            'Accept':"application/json",
            'Content-Type':"application/json"
        },
        body:JSON.stringify(values)
    }).then(()=>cb());

    return{
        type:'POST_EDITED_ABOUT',
        payload:'Edited About Posted'
    }
}

export function postNewAbout(values,cb){
    const request = fetch(`${rootUrl}/api/aboutus`, {
        method:'POST',
        headers:{
            'Accept':"application/json",
            'Content-Type':"application/json"
        },
        body:JSON.stringify(values)
    }).then(()=>cb());

    return{
        type:'POST_NEW_ABOUT',
        payload:request
    }
}

export function deleteAboutItem(id,cb){
    const request = fetch(`${rootUrl}/api/aboutus/${id}`,{method:'DELETE'})
    .then(()=>cb());

        return{
            type:'DELETED_ABOUT_ITEM',
            payload:'ABOUT ITEM DELETED'
        }
}

export function postNewService(values,cb){
    const request = fetch(`${rootUrl}/api/service`, {
        method:'POST',
        headers:{
            'Accept':"application/json",
            'Content-Type':"application/json"
        },
        body:JSON.stringify(values)
    }).then(()=>cb());

    return{
        type:'POST_NEW_SERVICE',
        payload:'Servce Posted'
    }
}

export function getAllServices(){
    const request = fetch(`${rootUrl}/api/allservices`,{method:'GET'})
        .then(res=>res.json());

        return{
            type:'GET_SERVICES_DATA',
            payload:request
        }
}

export function deleteService(id,cb){
    const request = fetch(`${rootUrl}/api/service/${id}`,{method:'DELETE'})
    .then(()=>cb());

        return{
            type:'DELETED_SERVICE',
            payload:'SERVICE DELETED'
        }
}

export function getIndividualService(id){
    const request = fetch(`${rootUrl}/api/service/${id}`,{method:'GET'})
        .then(res=>res.json());

        return{
            type:'GET_INDIVIDUAL_SERVICE',
            payload:request
        }
}

export function clearServiceDetail(){
    return{
        type:'CLEAR_SERVICE_DETAIL',
        payload:{}
    }
}

export function postEditedService(values,id,cb){
    const request = fetch(`${rootUrl}/api/service/${id}`, {
        method:'PUT',
        headers:{
            'Accept':"application/json",
            'Content-Type':"application/json"
        },
        body:JSON.stringify(values)
    }).then(()=>cb());

    return{
        type:'POST_EDITED_SERVICE',
        payload:'Edited Service Posted'
    }
}

export function postServiceImage(values,id,cb){
    const request = fetch(`${rootUrl}/api/image/service/${id}`, {
        method:'POST',
        headers:{
            'Accept':"application/json",
            'Content-Type':"application/json"
        },
        body:JSON.stringify(values)
    }).then(()=>cb());

    return{
        type:'POST_SERVICE_IMAGE',
        payload:'Servce Image Posted'
    }
}

export function deleteImage(id,cb){
    const request = fetch(`${rootUrl}/api/image/delete/${id}`,{method:'DELETE'})
    .then(()=>cb());

        return{
            type:'DELETED_IMAGE',
            payload:'IMAGE DELETED'
        }
}

export function getAllProjects(){
    const request = fetch(`${rootUrl}/api/projects`, {method:'GET'})
    .then(res=>res.json());

    return {
        type:'GET_ALL_PROJECTS',
        payload:request
    }
}

export function getIndividualProject(id){
    const request = fetch(`${rootUrl}/api/project/${id}`, {method:'GET'})
    .then(res=>res.json());

    return {
        type:'GET_INDIVIDUAL_PROJECT',
        payload:request
    }
}

export function deleteProject(id,cb){
    const request = fetch(`${rootUrl}/api/project/delete/${id}`,{method:'DELETE'})
    .then(()=>cb());

        return{
            type:'DELETED_PROJECT',
            payload:'PROJECT DELETED'
        }
}

export function postNewProject(values,cb){
    const request = fetch(`${rootUrl}/api/project/new`, {
        method:'POST',
        headers:{
            'Accept':"application/json",
            'Content-Type':"application/json"
        },
        body:JSON.stringify(values)
    }).then(()=>cb());

    return{
        type:'POST_NEW_PROJECT',
        payload:'Project Posted'
    }
}

export function postEditedProject(values,id,cb){
    const request = fetch(`${rootUrl}/api/project/edit/${id}`, {
        method:'PUT',
        headers:{
            'Accept':"application/json",
            'Content-Type':"application/json"
        },
        body:JSON.stringify(values)
    }).then(()=>cb());

    return{
        type:'POST_EDITED_PROJECT',
        payload:'Edited Project Posted'
    }
}

export function clearProjectDetails(){
    return{
        type:'CLEAR_PROJECT_DETAIL',
        payload:{}
    }
}

export function postProjectImage(values,id,cb){
    const request = fetch(`${rootUrl}/api/image/project/${id}`, {
        method:'POST',
        headers:{
            'Accept':"application/json",
            'Content-Type':"application/json"
        },
        body:JSON.stringify(values)
    }).then(()=>cb());

    return{
        type:'POST_PROJECT_IMAGE',
        payload:'Project Image Posted'
    }
}