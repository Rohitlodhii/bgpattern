

interface LinearPattern {
  key: number;
  id: string;
  title: string;
  default: {
    height: number;
    width: number;
    patternUnits: "userSpaceOnUse" | "objectBoundingBox";
    fill: string;
    fillOpacity: number;
    background: string;
    bgOpacity : number;
  };
  path: string;
  rawString : string;
}

export const LinearPatterns: LinearPattern[] = [
    {
        key : 1,
        id : "pattern-diagonal-stripes",
        title : "Diagonal Stripes",
        
        default : {
            height : 40,
            width : 40,
            patternUnits : "userSpaceOnUse",
            fill : "#9C92AC",
            fillOpacity : 0.2,
            background : "#DFDBE5",
            bgOpacity : 1,
        },
        path : "M0 40L40 0H20L0 20M40 40V20L20 40",
        rawString : `
        data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E
        `,
    },
    
    {
        key : 3,
        id : "pattern-steel-beams",
        title : "Steel Beams",
        
        default : {
            height : 40,
            width : 40,
            patternUnits : "userSpaceOnUse",
            fill : "#9C92AC",
            fillOpacity : 0.2,
            background : "#DFDBE5",
            bgOpacity : 1,
        },
        path : "M12 18h12v18h6v4H18V22h-6v-4zm-6-2v-4H0V0h36v6h6v36h-6v4h6v12H6v-6H0V16h6zM34 2H2v8h24v24h8V2zM6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM2 50h32v-8H10V18H2v32zm28-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'/%3E%3C/g%3E%3C/svg%3E",
        rawString : `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='58' viewBox='0 0 42 58'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M12 18h12v18h6v4H18V22h-6v-4zm-6-2v-4H0V0h36v6h6v36h-6v4h6v12H6v-6H0V16h6zM34 2H2v8h24v24h8V2zM6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM2 50h32v-8H10V18H2v32zm28-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'/%3E%3C/g%3E%3C/svg%3E`
    },
    {
        key : 4,
        id : "pattern-polka-dots",
        title : "Polka Dots",
        
        default : {
            height : 20,
            width : 20,
            patternUnits : "userSpaceOnUse",
            fill : "#9C92AC",
            fillOpacity : 0.9,
            background : "#DFDBE5",
            bgOpacity : 1,
        },
        path : "M6,3 A3,3 0 1,0 0,3 A3,3 0 1,0 6,3 M16,13 A3,3 0 1,0 10,13 A3,3 0 1,0 16,13'/%3E%3C/svg%3E",
        rawString : `data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E`
    },
    

]




const vectorSvgBg = [
    {
        key : 6,
        id : "vector-svg-1",
        title : "waves",
        default : {

        }
    }
]


