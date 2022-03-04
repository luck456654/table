new Vue({
    el: '#app',
    data() {
      return {
        info: null,
        id:'true',
        name:'true',
        year:'true',
        color:'true',
        pantone:'true'
      };
    },
    methods: {
     hideColumnId(){
       if (this.id=='true'){
      this.id='false'
       }
       else{
         this.id='true'
       }
     },
        hideColumnName(){
          if (this.name=='true'){
         this.name='false'
          }
          else{
            this.name='true'
          }
       },
       hideColumnYear(){
        if (this.year=='true'){
       this.year='false'
        }
        else{
          this.year='true'
        }
     },
     hideColumnColor(){
      if (this.color=='true'){
     this.color='false'
      }
      else{
        this.color='true'
      }
   }, 
   hideColumnPantone(){
    if (this.pantone=='true'){
   this.pantone='false'
    }
    else{
      this.pantone='true'
    }
 }, 
 reset(){
   this.id = 'true';
   this.name='true';
   this.year='true';
   this.color='true';
   this.pantone='true';
     
    }}
    ,
    mounted() {
      axios
        .get('https://reqres.in/api/unknown?per_page=12')
        .then((response) => {this.info =  response.data
        })
        
       
      }
    
    });


 