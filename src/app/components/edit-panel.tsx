"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { RESUME_DATA as FULLSTACK_TEMPLATE } from "@/data/resume-data";
import { RESUME_DATA as FRONTEND_TEMPLATE } from "@/data/resume-data-2";
import { parseResumeJson, resumeToJson } from "@/lib/resume-schema";
import type { ResumeData } from "@/lib/types";

interface EditPanelProps {
   open: boolean;
   onOpenChange: (open: boolean) => void;
   data: ResumeData;
   originalData: ResumeData;
   onDataLoad: (data: ResumeData) => void;
}

/**
 * Panel de edición: carga de datos por JSON, templates base y foto de perfil.
 */
export function EditPanel({
   open,
   onOpenChange,
   data,
   originalData,
   onDataLoad,
}: EditPanelProps) {
   const [jsonText, setJsonText] = useState("");
   const [error, setError] = useState<string | null>(null);
   const [copied, setCopied] = useState(false);

   // Al abrir el panel, precargar el JSON de los datos actuales
   useEffect(() => {
      if (open) {
         setJsonText(resumeToJson(data));
         setError(null);
      }
      // biome-ignore lint/correctness/useExhaustiveDependencies: sync al abrir
   }, [open]);

   function handleLoadJson() {
      if (!jsonText.trim()) {
         setError("Pegá un JSON primero.");
         return;
      }

      const result = parseResumeJson(jsonText);

      if (!result.ok) {
         setError(result.error);
         return;
      }

      // Si el JSON no trae foto, conservar la actual
      const loaded: ResumeData = {
         ...result.data,
         avatarUrl: result.data.avatarUrl || data.avatarUrl,
      };

      setError(null);
      onDataLoad(loaded);
      onOpenChange(false);
   }

   async function handleCopyTemplate() {
      await navigator.clipboard.writeText(resumeToJson(data));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
   }

   function handleTemplate(template: ResumeData) {
      onDataLoad(template);
      onOpenChange(false);
   }

   function handlePhoto(event: React.ChangeEvent<HTMLInputElement>) {
      const file = event.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
         onDataLoad({ ...data, avatarUrl: String(reader.result) });
         onOpenChange(false);
      };
      reader.readAsDataURL(file);
   }

   return (
      <Dialog open={open} onOpenChange={onOpenChange}>
         <DialogContent className="max-h-[85vh] overflow-hidden p-0">
            <div className="max-h-[85vh] space-y-4 overflow-y-auto px-6 pb-6 pt-6">
               <DialogHeader>
                  <DialogTitle>Editar datos</DialogTitle>
                  <DialogDescription>
                     Cargá una plantilla base o pegá tu JSON.
                  </DialogDescription>
               </DialogHeader>

               {/* 1. JSON */}
               <section className="space-y-2">
                  <label
                     htmlFor="json-input"
                     className="text-sm font-semibold"
                  >
                     Datos en JSON
                  </label>
                  <Textarea
                     id="json-input"
                     rows={10}
                     value={jsonText}
                     onChange={(event) => {
                        setJsonText(event.target.value);
                        setError(null);
                     }}
                     placeholder='{"name": "Tu nombre", ...}'
                     className="font-mono text-xs"
                  />
                  {error && (
                     <p className="text-xs text-destructive" role="alert">
                        {error}
                     </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                     <Button size="sm" onClick={handleLoadJson}>
                        Cargar
                     </Button>
                     <Button
                        size="sm"
                        variant="outline"
                        onClick={handleCopyTemplate}
                     >
                        {copied ? "Copiado ✓" : "Copiar JSON"}
                     </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                     Consejo: copiá el JSON, pasáselo a una IA para que lo
                     complete con tus datos, y pegá el resultado acá.
                  </p>
               </section>

               {/* 2. Templates */}
               <section className="space-y-2 border-t pt-4">
                  <p className="text-sm font-semibold">
                     Empezar con una plantilla
                  </p>
                  <div className="flex flex-wrap gap-2">
                     <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleTemplate(FULLSTACK_TEMPLATE)}
                     >
                        Fullstack
                     </Button>
                     <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleTemplate(FRONTEND_TEMPLATE)}
                     >
                        Frontend
                     </Button>
                  </div>
               </section>

               {/* 3. Foto */}
               <section className="space-y-2 border-t pt-4">
                  <p className="text-sm font-semibold">Foto de perfil</p>
                  <div className="flex items-center gap-3">
                     {data.avatarUrl && (
                        // biome-ignore lint/performance/noImgElement: avatar preview with dynamic source
                        <img
                           src={data.avatarUrl}
                           alt="Foto de perfil actual"
                           className="size-12 rounded-md object-cover"
                        />
                     )}
                     <label className="cursor-pointer">
                        <span className="inline-flex h-9 items-center rounded-md border border-input bg-background px-3 text-sm hover:bg-accent hover:text-accent-foreground">
                           Elegir imagen
                        </span>
                        <input
                           type="file"
                           accept="image/*"
                           className="sr-only"
                           onChange={handlePhoto}
                        />
                     </label>
                  </div>
               </section>

               {/* 4. Restablecer */}
               <section className="border-t pt-4">
                  <Button
                     size="sm"
                     variant="ghost"
                     onClick={() => handleTemplate(originalData)}
                  >
                     Restablecer datos originales
                  </Button>
               </section>
            </div>
         </DialogContent>
      </Dialog>
   );
}
