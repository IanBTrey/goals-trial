import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals = [
      new Goal(1,'Watch Avengers ENDGAME','Find an online version and watch Avengers defeat Thanos',new Date(2019,5,10) ),
      new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,5,11) ),
      new Goal(3, 'Get new iPhone ','2020 coming up soon',new Date(2020,3,24) ),
      new Goal(4, 'Get Dog Food','Pupper likes expensive snacks',new Date(2018,3,14) ),
      new Goal(5, 'Finish java IP ','Damn its hard',new Date(2019,4,20) ),
      new Goal(6, 'Plot my world domination plan','Cause I am an awesome guy',new Date(2022,3,24) ),
  ]
}

deleteGoal(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)

            if(toDelete){
                this.goals.splice(index,1)
      }
      addNewGoal(goal){
        let goalLength = this.goals.length;
        goal.id=goalLength+1;
        goal.completeDate = new Date(goal.completeDate)
        this.goals.push(goal)

    }
  }


toogleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
}

  constructor() { }

  ngOnInit() {
  }

}
