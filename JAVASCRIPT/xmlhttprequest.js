const xhr = new XMLHttpRequest();

xhr.open('GET','/contact.html');
xhr.addEventListener('load', function()
{
    if(this.status >=200 && this.status <300)
    {
        console.log(this.responseText);
    }
});

xhr.setRequestHeader('Accept','text/html');
xhr.send();