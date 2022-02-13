<template>
  <SectionWrapperColumns align="center">
    <template #title>
        <RectangleHeader class="text-6xl">
           Samobójstwa
        </RectangleHeader>
    </template>
   
    
    <template #col-left>
        <div class="flex flex-col items-center justify-center py-6">
            <div class="flex flex-col items-center justify-center">
                <img 
                    class="w-6/12 md:w-11/12"
                    alt=""
                    src="~/assets/img/sections/male.svg"
                    />
            </div>
            <div>
                <div class="text-3xl md:text-4xl">4638 samobójstw</div>
                <div class="text-2xl text-center md:text-3xl">(85,8% przypadków)</div>
                <div class="text-2xl text-center md:text-3xl">Polska rok 2016</div>
            </div>
        </div>
    </template>
    <template #col-right>
        <div class="flex flex-col items-center justify-center py-6">
            <div class="flex flex-col items-center justify-center">
                <img 
                    class="w-6/12 md:w-11/12"
                    alt=""
                    src="~/assets/img/sections/woman.svg"
                    />
            </div>
            <div>
                <div class="text-3xl md:text-4xl">767 samobójstw</div>
                <div class="text-2xl text-center md:text-3xl">(14,2% przypadków) </div>
                <div class="text-2xl text-center md:text-3xl">Polska rok 2016</div>
            </div>
        </div>
    </template>
    </SectionWrapperColumns>
</template>

<style scoped>

</style>