<template>
  <SectionWrapperColumns align="center">
    <template #title>
        <RectangleHeader class="text-6xl">
            Samobójswa w Polsce<br/>
            <div class="text-center">rok 2016</div>
        </RectangleHeader>
    </template>
   
    
    <template #col-left>
        <div class="flex flex-col items-center justify-center text-center">
            <div class="flex flex-col items-center justify-center text-center">
                <img 
                    class="w-6/12 md:w-11/12"
                    alt=""
                    src="~/assets/img/sections/male.svg"
                    />
            </div>
            <div>
                <div class="text-2xl md:text-4xl">4638 samobójstw</div>
                <div class="text-1xl md:text-2xl">(85,8% przypadków)</div>
            </div>
        </div>
    </template>
    <template #col-right>
        <div class="flex flex-col items-center justify-center text-center">
            <div class="flex flex-col items-center justify-center text-center">
                <img 
                    class="w-6/12 md:w-11/12"
                    alt=""
                    src="~/assets/img/sections/woman.svg"
                    />
            </div>
            <div>
                <div class="text-2xl md:text-4xl">767 samobójstw</div>
                <div class="text-1xl md:text-2xl">(14,2% przypadków) </div>
            </div>
        </div>
    </template>
    </SectionWrapperColumns>
</template>

<style scoped>

</style>