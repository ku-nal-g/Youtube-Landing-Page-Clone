import { Component, OnInit } from '@angular/core';
import { VideoCard } from 'src/app/interfaces/video-card';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {


  valueChoosen: string = 'All';

  cardData: VideoCard[] = [];

  getClass(data: string) {
    if (this.valueChoosen == data) {
      return 'style-span';
    }
    else {
      return 'filters-text';
    }
  }
  setData(data: string) {
    this.valueChoosen = data;
  }
  ngOnInit(): void {
    this.cardData = [
      {
        id: 1,
        thumbnail_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLL4b-uUEgMCxRvBmPNO846oyVQBBnFwKuQ&usqp=CAU",
        title: "In Aankhon Mein (Lyrical) - Rishad Dave",
        description: "Astrid S and more"
      },
      {
        id: 2,
        thumbnail_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwRPmTfxwOtD_rybFPGVRcJVsisVh3NmG5VA&usqp=CAU",
        title: "In Aankhon Mein (Lyrical) - Rishad Dave",
        description: "Astrid S and more"
      },
      {
        id: 3,
        thumbnail_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT073qWU9DCC2l_tticA9YfKuES70rd9bC-qg&usqp=CAU",
        title: "In Aankhon Mein (Lyrical) - Rishad Dave",
        description: "Astrid S and more"
      },
      {
        id: 4,
        thumbnail_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmVm487MsjROlEEwImu1ft8Sx4nxLzkx-F9cE0HuLBGNCN_Igcuy64iyqurO4m8vx1LRw&usqp=CAU",
        title: "In Aankhon Mein (Lyrical) - Rishad Dave",
        description: "Astrid S and more"
      },
      {
        id: 5,
        thumbnail_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuo35NjMx3h0QW2v9pA4LibWV_IVj1iwa4A&usqp=CAU",
        title: "In Aankhon Mein (Lyrical) - Rishad Dave",
        description: "Astrid S and more"
      },
      {
        id: 6,
        thumbnail_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdN7GgLVikNCsXwwJHpsu53DSIAr0l2ecP3A&usqp=CAU",
        title: "In Aankhon Mein (Lyrical) - Rishad Dave",
        description: "Astrid S and more"
      },
      {
        id: 1,
        thumbnail_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLL4b-uUEgMCxRvBmPNO846oyVQBBnFwKuQ&usqp=CAU",
        title: "In Aankhon Mein (Lyrical) - Rishad Dave",
        description: "Astrid S and more"
      },
      {
        id: 2,
        thumbnail_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwRPmTfxwOtD_rybFPGVRcJVsisVh3NmG5VA&usqp=CAU",
        title: "In Aankhon Mein (Lyrical) - Rishad Dave",
        description: "Astrid S and more"
      },
      {
        id: 3,
        thumbnail_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT073qWU9DCC2l_tticA9YfKuES70rd9bC-qg&usqp=CAU",
        title: "In Aankhon Mein (Lyrical) - Rishad Dave",
        description: "Astrid S and more"
      },
      {
        id: 4,
        thumbnail_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmVm487MsjROlEEwImu1ft8Sx4nxLzkx-F9cE0HuLBGNCN_Igcuy64iyqurO4m8vx1LRw&usqp=CAU",
        title: "In Aankhon Mein (Lyrical) - Rishad Dave",
        description: "Astrid S and more"
      },
      {
        id: 5,
        thumbnail_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuo35NjMx3h0QW2v9pA4LibWV_IVj1iwa4A&usqp=CAU",
        title: "In Aankhon Mein (Lyrical) - Rishad Dave",
        description: "Astrid S and more"
      },
      {
        id: 6,
        thumbnail_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdN7GgLVikNCsXwwJHpsu53DSIAr0l2ecP3A&usqp=CAU",
        title: "In Aankhon Mein (Lyrical) - Rishad Dave",
        description: "Astrid S and more"
      },
      {
        id: 1,
        thumbnail_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLL4b-uUEgMCxRvBmPNO846oyVQBBnFwKuQ&usqp=CAU",
        title: "In Aankhon Mein (Lyrical) - Rishad Dave",
        description: "Astrid S and more"
      },
      {
        id: 2,
        thumbnail_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwRPmTfxwOtD_rybFPGVRcJVsisVh3NmG5VA&usqp=CAU",
        title: "In Aankhon Mein (Lyrical) - Rishad Dave",
        description: "Astrid S and more"
      },
      {
        id: 3,
        thumbnail_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT073qWU9DCC2l_tticA9YfKuES70rd9bC-qg&usqp=CAU",
        title: "In Aankhon Mein (Lyrical) - Rishad Dave",
        description: "Astrid S and more"
      },
      {
        id: 4,
        thumbnail_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmVm487MsjROlEEwImu1ft8Sx4nxLzkx-F9cE0HuLBGNCN_Igcuy64iyqurO4m8vx1LRw&usqp=CAU",
        title: "In Aankhon Mein (Lyrical) - Rishad Dave",
        description: "Astrid S and more"
      },
      {
        id: 5,
        thumbnail_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuo35NjMx3h0QW2v9pA4LibWV_IVj1iwa4A&usqp=CAU",
        title: "In Aankhon Mein (Lyrical) - Rishad Dave",
        description: "Astrid S and more"
      },
      {
        id: 6,
        thumbnail_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdN7GgLVikNCsXwwJHpsu53DSIAr0l2ecP3A&usqp=CAU",
        title: "In Aankhon Mein (Lyrical) - Rishad Dave",
        description: "Astrid S and more"
      }
    ]
  }
}
