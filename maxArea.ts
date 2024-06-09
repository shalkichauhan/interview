function maxArea(height: number[]): number {


    let maxArea = 1
    let tempArea = 1

    for(let i:number=0;i<height.length;i++){
        for(let j:number=i+1;j<height.length;j++){
            if(height[i]<height[j]){

                tempArea = height[i]*(j-1)
                maxArea = Math.max(tempArea,maxArea)
            } else{
                tempArea=height[j]*(j-i)
                maxArea = Math.max(tempArea,maxArea)
            }

        }}

return maxArea;

}


console.log(maxArea( [1,8,6,2,5,4,8,3,7]))
